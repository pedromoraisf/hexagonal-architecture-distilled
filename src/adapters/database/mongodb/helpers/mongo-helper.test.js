const { mongoHelper } = require(".");

const sut = mongoHelper();

describe("Mongo Helper", () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL ?? "");
  });

  afterAll(async () => {
    await sut.disconnect();
  });

  test("should reconnect if mongodb is down", async () => {
    let accountCollection = await sut.getCollection("posts");
    expect(accountCollection).toBeTruthy();

    await sut.disconnect();
    accountCollection = await sut.getCollection("posts");
    expect(accountCollection).toBeTruthy();
  });
});
