const createAPostUseCase = require("./create-a-post");
const { PostRepositoryInMemoryAdapter } = require("@/adapters/database/in-memory");
const { HttpFrameworkMockAdapter } = require("@/adapters/http/mock");

const makeFixture = () => ({
  title: "any_title",
  content: "any_content"
});

const makeSut = () => {
  const makedPostRepositoryInMemoryAdapter = PostRepositoryInMemoryAdapter();
  const makedHttpFramworkMockAdapter = HttpFrameworkMockAdapter();
  const sut = (payload) =>
    createAPostUseCase({ payload }, makedPostRepositoryInMemoryAdapter, makedHttpFramworkMockAdapter);

  return {
    sut,
    makedPostRepositoryInMemoryAdapter
  };
};

describe("Create a post", () => {
  test("should validate all required properties to create a post", async () => {
    const { sut } = makeSut();

    const wrongFixture = {
      ...makeFixture(),
      content: null
    };

    const testable = async () => await sut(wrongFixture);

    await expect(testable).rejects.toThrow(new Error("Received publication to be wrong"));
  });

  test("should call repository correctly to create a post", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const spyCreate = jest.spyOn(makedPostRepositoryInMemoryAdapter, "create");

    await sut(makeFixture());

    expect(spyCreate).toHaveBeenCalledTimes(1);
    expect(spyCreate).toHaveBeenCalledWith(makeFixture());
  });

  test("should return an serverError if repository throws any low-level error", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    jest
      .spyOn(makedPostRepositoryInMemoryAdapter, "create")
      .mockImplementationOnce(() => Promise.reject(new Error("any_low_level_error")));

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 500,
      body: {
        message: "Internal server error"
      }
    });
  });

  test("should return correctly ok response with post created", async () => {
    const { sut } = makeSut();

    const testable = await sut(makeFixture());

    expect(testable).toEqual({
      statusCode: 200,
      body: {
        ...makeFixture(),
        _id: "any_id"
      }
    });
  });
});
