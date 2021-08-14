const { nanoid } = require("nanoid");
const { PostToCreateDTO, PostToGetDTO, PostToEditDTO } = require("@/ports/database/post-repository/dto");
const { mongoHelper } = require("../helpers");
const { makeErrorPattern, Errors } = require("@/shared/error");

const PostRepositoryMongoDbAdapter = () => ({
  COLLECTION_NAME: "posts",
  async getCollection() {
    return mongoHelper.getCollection(this.COLLECTION_NAME);
  },
  async create(payload = PostToCreateDTO) {
    return this.handleErrorDecorator(async () => {
      const collection = await this.getCollection();
      const postToInsert = {
        ...payload,
        _id: nanoid()
      };
      const { acknowledged = false } = await collection.insertOne(postToInsert);
      return acknowledged ? postToInsert : false;
    });
  },
  async listAll() {
    return this.handleErrorDecorator(async () => {
      const collection = await this.getCollection();
      return collection.find({}).toArray();
    });
  },
  async update(payload = PostToEditDTO) {
    return this.handleErrorDecorator(async () => {
      const collection = await this.getCollection();
      const updatedValue = await collection.findOneAndUpdate(
        {
          _id: payload.id
        },
        {
          $set: payload.data
        }
      );
      return !!updatedValue.value;
    });
  },
  async listOne(payload = PostToGetDTO) {
    return this.handleErrorDecorator(async () => {
      const collection = await this.getCollection();
      const findedPost = await collection.findOne({
        _id: payload.id
      });
      return findedPost || false;
    });
  },
  async handleErrorDecorator(cb) {
    try {
      return cb();
    } catch (e) {
      throw makeErrorPattern({ type: Errors.SERVER_ERROR, payload: e.message });
    }
  }
});

module.exports = PostRepositoryMongoDbAdapter;
