const { PostRepositoryPort } = require("@/hexagon/ports/driven/for-post-repository");
const { HttpFrameworkPort } = require("@/hexagon/ports/driver/http-framework");

const listAllPostsUseCase =
  (postRepository = PostRepositoryPort, { ok } = HttpFrameworkPort) =>
  async () => {
    const persistedPosts = await postRepository.listAll();
    return ok(persistedPosts);
  };

module.exports = listAllPostsUseCase;
