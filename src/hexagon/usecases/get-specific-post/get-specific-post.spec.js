/* eslint-disable no-undef */
const getSpecificPostUseCase = require("./get-specific-post");
const { handleErrorDecorator } = require("@/hexagon/usecases/decorators");
const { PostRepositoryInMemoryAdapter } = require("@/adapters/database/in-memory");
const { HttpFrameworkMockAdapter } = require("@/adapters/http/mock");
const { makeErrorPattern, Errors } = require("@/shared/error");

const makeFakePersistedFixture = (post = { _id: "any_id", title: "any_title", content: "any_content" }) => post;

const makeFixture = () => ({
  id: "any_id"
});

const makeSut = () => {
  const makedPostRepositoryInMemoryAdapter = PostRepositoryInMemoryAdapter();
  const makedHttpFrameworkMockAdapter = HttpFrameworkMockAdapter();
  const sut = (payload) => {
    return handleErrorDecorator(
      () => getSpecificPostUseCase(makedPostRepositoryInMemoryAdapter, makedHttpFrameworkMockAdapter)({ payload }),
      makedHttpFrameworkMockAdapter
    );
  };

  return {
    sut,
    makedPostRepositoryInMemoryAdapter
  };
};

describe("Get specific post", () => {
  test("should validate all required properties to get a specific post", async () => {
    const { sut } = makeSut();

    const testable = await sut({ id: null });

    expect(testable).toEqual({
      statusCode: 404,
      body: {
        message: "Received publication to be wrong"
      }
    });
  });

  test("should call repository correctly to get a specific post", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const spyUpdate = jest.spyOn(makedPostRepositoryInMemoryAdapter, "listOne");
    spyUpdate.mockImplementationOnce(() => Promise.resolve({}));

    await sut(makeFixture());

    expect(spyUpdate).toHaveBeenCalledTimes(1);
    expect(spyUpdate).toHaveBeenCalledWith(makeFixture());
  });

  test("should return badRequest if wanted post is not finded", async () => {
    const { sut } = makeSut();

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 404,
      body: {
        message: "Post not found"
      }
    });
  });

  test("should return an serverError if repository throws any low-level error", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const makedError = makeErrorPattern({ type: Errors.SERVER_ERROR });
    jest.spyOn(makedPostRepositoryInMemoryAdapter, "listOne").mockImplementationOnce(() => Promise.reject(makedError));

    const testable = await sut();

    expect(testable).toEqual({
      statusCode: 500,
      body: {
        message: "Internal server error"
      }
    });
  });

  test("should return correctly ok response with persisted post", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    makedPostRepositoryInMemoryAdapter.posts.push(makeFakePersistedFixture());

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 200,
      body: makeFakePersistedFixture()
    });
  });
});
