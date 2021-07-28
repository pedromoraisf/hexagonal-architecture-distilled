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
});
