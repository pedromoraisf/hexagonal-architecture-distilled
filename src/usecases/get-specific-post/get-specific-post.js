const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { GetSpecificPostDTO } = require("./dto");

const getSpecificPostUseCase = async (
  { payload = GetSpecificPostDTO },
  postRepository = PostRepositoryPort,
  { badRequest, ok } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload);
  const persistedPost = await postRepository.listOne(payload);
  if (!persistedPost) {
    return badRequest("Post not found");
  }
  return ok(persistedPost);
};

module.exports = getSpecificPostUseCase;
