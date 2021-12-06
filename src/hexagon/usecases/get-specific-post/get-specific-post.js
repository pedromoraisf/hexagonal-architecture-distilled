const { PostRepositoryPort } = require("@/hexagon/ports/driven/for-post-repository");
const { WebPort } = require("@/hexagon/ports/driver");
const { validateReceivedPublication } = require("@/hexagon/usecases/helpers");
const { GetSpecificPostDto } = require("@/hexagon/usecases/get-specific-post/dto");

const getSpecificPostUseCase =
  (postRepository = PostRepositoryPort, { badRequest, ok } = WebPort) =>
  async ({ payload = GetSpecificPostDto }) => {
    validateReceivedPublication(payload);
    const persistedPost = await postRepository.listOne(payload);
    if (!persistedPost) {
      return badRequest("Post not found");
    }
    return ok(persistedPost);
  };

module.exports = getSpecificPostUseCase;
