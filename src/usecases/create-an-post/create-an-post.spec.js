const createAnPostUseCase = require("./create-an-post");

const makeFixture = () => ({
  title: "any_title",
  content: "any_content",
});

const makeSut = () => {
  const sut = createAnPostUseCase;

  return {
    sut,
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
});
