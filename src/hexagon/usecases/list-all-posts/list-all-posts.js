const { PostRepositoryPort } = require("@/hexagon/ports/driven/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");

const listAllPostsUseCase =
  (postRepository = PostRepositoryPort, { ok } = HttpFrameworkPort) =>
  async () => {
    const persistedPosts = await postRepository.listAll();
    return ok(persistedPosts);
  };

module.exports = listAllPostsUseCase;
