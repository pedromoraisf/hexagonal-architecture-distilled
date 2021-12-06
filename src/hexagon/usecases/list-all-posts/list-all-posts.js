const { PostRepositoryPort } = require("@/hexagon/ports/driven/for-post-repository");
const { WebPort } = require("@/hexagon/ports/driver");

const listAllPostsUseCase =
  (postRepository = PostRepositoryPort, { ok } = WebPort) =>
  async () => {
    const persistedPosts = await postRepository.listAll();

    return ok(persistedPosts);
  };

module.exports = listAllPostsUseCase;
