const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");

const listAllPostsUseCase = async (postRepository = PostRepositoryPort, { ok, serverError } = HttpFrameworkPort) => {
  const persistedPosts = await postRepository.listAll();
};

module.exports = listAllPostsUseCase;
