const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { GetSpecificPostDTO } = require("./dto");

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
