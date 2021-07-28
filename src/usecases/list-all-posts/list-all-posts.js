const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");

const listAllPostsUseCase = async (postRepository = PostRepositoryPort, { ok, serverError } = HttpFrameworkPort) => {
  try {
    const persistedPosts = await postRepository.listAll();
    return ok(persistedPosts);
  } catch {
    return serverError();
  }
};

module.exports = listAllPostsUseCase;
