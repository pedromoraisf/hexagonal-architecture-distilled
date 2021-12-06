/* eslint-disable no-unused-vars */
const { PostToCreateDto, PostToEditDto, PostToGetDto } = require("./dto");

const PostRepositoryPort = {
  create: async (payload = PostToCreateDto) => {
    throw new Error("NOT_IMPLEMENTED");
  },
  listAll: async () => {
    throw new Error("NOT_IMPLEMENTED");
  },
  update: async (payload = PostToEditDto) => {
    throw new Error("NOT_IMPLEMENTED");
  },
  listOne: async (payload = PostToGetDto) => {
    throw new Error("NOT_IMPLEMENTED");
  }
};

module.exports = PostRepositoryPort;
