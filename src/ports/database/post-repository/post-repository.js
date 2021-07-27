const { PostToCreateDTO } = require("./dto");

const PostRepositoryPort = () => ({
  create: (payload = PostToCreateDTO) => {
    return new Error("NOT_IMPLEMENTED");
  },
});

module.exports = PostRepositoryPort;
