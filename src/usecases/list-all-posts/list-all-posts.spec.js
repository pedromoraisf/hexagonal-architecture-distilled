/* eslint-disable no-undef */
const listAllPostsUseCase = require("./list-all-posts");
const { PostRepositoryInMemoryAdapter } = require("@/adapters/database/in-memory");
const { HttpFrameworkMockAdapter } = require("@/adapters/http/mock");
const { handleErrorDecorator } = require("../decorators");
const { makeErrorPattern, Errors } = require("@/shared/error");

const makeFakePersistedFixture = (post = { _id: "any_id", title: "any_title", content: "any_content" }) => post;

const makeSut = () => {
  const makedPostRepositoryInMemoryAdapter = PostRepositoryInMemoryAdapter();
  const makedHttpFramworkMockAdapter = HttpFrameworkMockAdapter();
  const sut = () => {
    return handleErrorDecorator(
      () => listAllPostsUseCase(makedPostRepositoryInMemoryAdapter, makedHttpFramworkMockAdapter)(),
      makedHttpFramworkMockAdapter
    );
  };

  return {
    sut,
    makedPostRepositoryInMemoryAdapter
  };
};

describe("List all posts", () => {
  test("should call repository correctly to list all posts", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const spyListAll = jest.spyOn(makedPostRepositoryInMemoryAdapter, "listAll");

    await sut();

    expect(spyListAll).toHaveBeenCalledTimes(1);
  });

  test("should return an serverError if repository throws any low-level error", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const makedError = makeErrorPattern({ type: Errors.SERVER_ERROR });
    jest.spyOn(makedPostRepositoryInMemoryAdapter, "listAll").mockImplementationOnce(() => Promise.reject(makedError));

    const testable = await sut();

    expect(testable).toEqual({
      statusCode: 500,
      body: {
        message: "Internal server error"
      }
    });
  });

  test("should return correctly ok response with persisted posts", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const makedFakePersistedFixture = makeFakePersistedFixture();
    makedPostRepositoryInMemoryAdapter.posts.push(makedFakePersistedFixture);

    const testable = await sut();

    expect(testable).toEqual({
      statusCode: 200,
      body: [makedFakePersistedFixture]
    });
  });
});
