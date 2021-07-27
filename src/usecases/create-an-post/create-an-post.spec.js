const createAnPostUseCase = require("./create-an-post");
const {
  PostRepositoryInMemoryAdapter,
} = require("@/adapters/database/in-memory");

const makeFixture = () => ({
  title: "any_title",
  content: "any_content",
});

const makeSut = () => {
  const makedPostRepositoryInMemoryAdapter = PostRepositoryInMemoryAdapter();
  const sut = (payload) =>
    createAnPostUseCase({ payload }, makedPostRepositoryInMemoryAdapter);

  return {
    sut,
    makedPostRepositoryInMemoryAdapter,
  };
};

describe("Create an post", () => {
  test("should validate all required properties to create an post", async () => {
    const { sut } = makeSut();

    const wrongFixture = {
      ...makeFixture(),
      content: null,
    };

    const testable = async () => await sut({ payload: wrongFixture });

    await expect(testable).rejects.toThrow(
      new Error("Received publication to be wrong")
    );
  });

  test("should call repository correctly to create an post", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const spyCreate = jest.spyOn(makedPostRepositoryInMemoryAdapter, "create");

    await sut(makeFixture());

    expect(spyCreate).toHaveBeenCalledTimes(1);
    expect(spyCreate).toHaveBeenCalledWith(makeFixture());
  });
});
