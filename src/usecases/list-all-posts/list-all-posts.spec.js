const listAllPostsUseCase = require("./list-all-posts");
const { PostRepositoryInMemoryAdapter } = require("@/adapters/database/in-memory");
const { HttpFrameworkMockAdapter } = require("@/adapters/http/mock");
const { Post } = require("@/entities");

const makeFakePersistedFixture = (post = Post) => post;

const makeSut = () => {
  const makedPostRepositoryInMemoryAdapter = PostRepositoryInMemoryAdapter();
  const makedHttpFramworkMockAdapter = HttpFrameworkMockAdapter();
  const sut = () => listAllPostsUseCase(makedPostRepositoryInMemoryAdapter, makedHttpFramworkMockAdapter);

  return {
    sut,
    makedPostRepositoryInMemoryAdapter
  };
};

describe("List all posts", () => {
  test("should call repository correctly to list all posts", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const makedFakePersistedFixture = makeFakePersistedFixture();
    makedPostRepositoryInMemoryAdapter.posts.push(makedFakePersistedFixture);

    const spyListAll = jest.spyOn(makedPostRepositoryInMemoryAdapter, "listAll");

    await sut();

    expect(spyListAll).toHaveBeenCalledTimes(1);
  });

  test("should return an serverError if repository throws any low-level error", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    jest
      .spyOn(makedPostRepositoryInMemoryAdapter, "listAll")
      .mockImplementationOnce(() => Promise.reject(new Error("any_low_level_error")));

    const testable = await sut();

    expect(testable).toEqual({
      statusCode: 500,
      body: {
        message: "Internal server error"
      }
    });
  });
});
