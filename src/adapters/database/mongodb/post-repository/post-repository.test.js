const { PostRepositoryMongoDbAdapter } = require(".");
const { mongoHelper } = require("./../helpers");
const sutDriver = require("./driver");

const makeFixtureToInsert = () => ({
  title: "any_integration_test_title",
  content: "any_integration_test_content"
});

const sut = PostRepositoryMongoDbAdapter();

describe("Post Repository MongoDB Adapter", () => {
  let driver = null;

  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL ?? "");
    const collection = await sut.getCollection();
    driver = sutDriver(collection);
  });

  afterAll(async () => {
    await mongoHelper.disconnect();
  });

  afterEach(async () => {
    await driver.clearDatabase();
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

  describe("update", () => {
    test("should update a post", async () => {
      const { insertedId = "" } = await driver.createPostAndReturnId(makeFixtureToInsert());

      const testable = await sut.update({
        id: insertedId,
        data: {
          title: "any_updated_title"
        }
      });

      expect(testable).toBeTruthy();
    });
  });

  describe("List One", () => {
    test("should list a specific persisted post", async () => {
      const makedFixtureToInsert = makeFixtureToInsert();
      const { insertedId = "" } = await driver.createPostAndReturnId(makedFixtureToInsert);

      const testable = await sut.listOne(insertedId);

      expect(testable).toEqual({
        ...makedFixtureToInsert,
        _id: insertedId
      });
    });
  });
});
