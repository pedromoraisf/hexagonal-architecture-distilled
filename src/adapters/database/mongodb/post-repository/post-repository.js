const { nanoid } = require("nanoid");
const { PostToCreateDTO, PostToGetDTO } = require("@/ports/database/post-repository/dto");
const { mongoHelper } = require("../helpers");
const { makeErrorPattern, Errors } = require("@/shared/error");

const PostRepositoryMongoDbAdapter = () => ({
  COLLECTION_NAME: "posts",
  async getCollection() {
    return mongoHelper.getCollection(this.COLLECTION_NAME);
  },
  async create(payload = PostToCreateDTO) {
    try {
      const collection = await this.getCollection();
      const { acknowledged = false } = await collection.insertOne({
        ...payload,
        _id: nanoid()
      });
      return acknowledged;
    } catch (e) {
      throw makeErrorPattern({ type: Errors.SERVER_ERROR, payload: e.message });
    }
  },
  async listAll() {
    try {
      const collection = await this.getCollection();
      return collection.find({}).toArray();
    } catch (e) {
      throw makeErrorPattern({ type: Errors.SERVER_ERROR, payload: e.message });
    }
  },
  async listOne(payload = PostToGetDTO) {
    try {
      const collection = await this.getCollection();
      const findedPost = await collection.findOne({
        id: payload.id
      });
      return findedPost || false;
    } catch (e) {
      throw makeErrorPattern({ type: Errors.SERVER_ERROR, payload: e.message });
    }
  }
});

module.exports = PostRepositoryMongoDbAdapter;
