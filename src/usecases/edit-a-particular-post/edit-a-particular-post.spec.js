const editAParticularPostUseCase = require("./edit-a-particular-post");
const { PostRepositoryInMemoryAdapter } = require("@/adapters/database/in-memory");
const { HttpFrameworkMockAdapter } = require("@/adapters/http/mock");

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
  const sut = (payload) =>
    editAParticularPostUseCase({ payload }, makedPostRepositoryInMemoryAdapter, makedHttpFrameworkMockAdapter);

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

    const testable = async () => await sut(wrongFixture);

    await expect(testable).rejects.toThrow(new Error("Received publication to be wrong"));
  });

  test("should call repository correctly to edit a particular post", async () => {
    const { sut, makedPostRepositoryInMemoryAdapter } = makeSut();

    const spyUpdate = jest.spyOn(makedPostRepositoryInMemoryAdapter, "update");
    spyUpdate.mockImplementationOnce(() => Promise.resolve());

    await sut(makeFixture());

    expect(spyUpdate).toHaveBeenCalledTimes(1);
    expect(spyUpdate).toHaveBeenCalledWith(makeFixture());
  });
});
