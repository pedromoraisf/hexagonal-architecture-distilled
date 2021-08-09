const { PostRepositoryMongoDbAdapter } = require(".");
const { mongoHelper } = require("./../helpers");
const sutDriver = require("./driver");

const makeFixtureToInsert = () => ({
  title: "any_integration_test_post",
  content: "any_integration_test_content"
});

const sut = PostRepositoryMongoDbAdapter();

describe("Post Repository MongoDB Adapter", () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL ?? "");
  });

  afterAll(async () => {
    await mongoHelper.disconnect();
  });

  afterEach(async () => {
    const collection = await sut.getCollection();
    await sutDriver(collection).clearDatabase();
  });

  describe("Create", () => {
    test("should create correctly a post", async () => {
      const testable = await sut.create(makeFixtureToInsert());

      expect(testable).toBeTruthy();
    });
  });

  describe("List All", () => {
    test("should list all inserted posts", async () => {
      await sut.create(makeFixtureToInsert());
      await sut.create(makeFixtureToInsert());

      const testable = await sut.listAll();

      expect(Array.isArray(testable)).toBeTruthy();
      expect(testable.length).toEqual(2);
    });
  });
});
