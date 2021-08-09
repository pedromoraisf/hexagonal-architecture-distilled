const { PostRepositoryMongoDbAdapter } = require(".");
const { mongoHelper } = require("./../helpers");

const sut = PostRepositoryMongoDbAdapter();

describe("Post Repository MongoDB Adapter", () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL ?? "");
  });

  afterAll(async () => {
    await mongoHelper.disconnect();
  });

  describe("Create", () => {
    const makeFixture = () => ({
      title: "any_integration_test_post",
      content: "any_integration_test_content"
    });

    test("should create correctly a post", async () => {
      const testable = await sut.create(makeFixture());
      expect(testable).toBeTruthy();
    });
  });
});
