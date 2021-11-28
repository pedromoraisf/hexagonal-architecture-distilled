const { PostRepositoryPort } = require("@/hexagon/ports/driven/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("@/hexagon/usecases/helpers");
const { GetSpecificPostDTO } = require("@/hexagon/usecases/get-specific-post/dto");

const getSpecificPostUseCase =
  (postRepository = PostRepositoryPort, { badRequest, ok } = HttpFrameworkPort) =>
  async ({ payload = GetSpecificPostDTO }) => {
    validateReceivedPublication(payload);
    const persistedPost = await postRepository.listOne(payload);
    if (!persistedPost) {
      return badRequest("Post not found");
    }
    return ok(persistedPost);
  };

module.exports = getSpecificPostUseCase;
