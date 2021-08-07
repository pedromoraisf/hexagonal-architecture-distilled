const editAParticularPostUseCase = require("./edit-a-particular-post");
const { handleErrorDecorator } = require("./../decorators");
const { PostRepositoryInMemoryAdapter } = require("@/adapters/database/in-memory");
const { HttpFrameworkMockAdapter } = require("@/adapters/http/mock");
const { Errors, makeErrorPattern } = require("@/shared/error");

const makeFixtureToUpdate = () => ({
  title: "any_title",
  content: "any_content"
});

const makeFixture = () => ({
  id: "any_id",
  data: {
    title: "any_updated_title",
    content: "any_updated_content"
  }
});

const makeSut = () => {
  const makedPostRepositoryInMemoryAdapter = PostRepositoryInMemoryAdapter();
  const makedHttpFrameworkMockAdapter = HttpFrameworkMockAdapter();
  const sut = (payload) => {
    const makedUseCase = () =>
      editAParticularPostUseCase({ payload }, makedPostRepositoryInMemoryAdapter, makedHttpFrameworkMockAdapter);
    return handleErrorDecorator(makedUseCase, makedHttpFrameworkMockAdapter);
  };

  return {
    sut,
    makedPostRepositoryInMemoryAdapter
  };
};

describe("Edit a particular post", () => {
  test("should validate all required properties to update an post", async () => {
    const { sut } = makeSut();

    const wrongFixture = {
      ...makeFixture(),
      data: {
        ...makeFixture().data,
        content: null
      }
    };

    const testable = await sut(wrongFixture);

    expect(testable).toEqual({
      statusCode: 404,
      body: {
        message: "Received publication to be wrong"
      }
    });
  });

  test("should call repository correctly to edit a particular post", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const spyUpdate = jest.spyOn(makedPostRepositoryInMemoryAdapter, "update");
    spyUpdate.mockImplementationOnce(() => Promise.resolve(true));

    await sut(makeFixture());

    expect(spyUpdate).toHaveBeenCalledTimes(1);
    expect(spyUpdate).toHaveBeenCalledWith(makeFixture());
  });

  test("should return an badRequest if repository not find the requested post", async () => {
    const { sut } = makeSut();

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 404,
      body: {
        message: "The publication was not found"
      }
    });
  });

  test("should return an serverError if repository throws any low-level error", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const makedError = makeErrorPattern({ type: Errors.SERVER_ERROR });
    jest
      .spyOn(makedPostRepositoryInMemoryAdapter, "update")
      .mockImplementationOnce(() => Promise.reject(new Error(makedError)));

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 500,
      body: {
        message: "Internal server error"
      }
    });
  });

  test("should return correctly ok response with post update confirmation", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    await makedPostRepositoryInMemoryAdapter.create(makeFixtureToUpdate());

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 200,
      body: "Post has been updated"
    });
  });
});
