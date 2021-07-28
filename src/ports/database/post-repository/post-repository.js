const { PostToCreateDTO } = require("./dto");

const PostRepositoryPort = {
  create: async (payload = PostToCreateDTO) => {
    throw new Error("NOT_IMPLEMENTED");
  }
};

module.exports = PostRepositoryPort;
