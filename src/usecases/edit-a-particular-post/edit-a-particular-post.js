const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { editAParticularPostDTO } = require("./dto");

const editAParticularPostUseCase = async (
  { payload = editAParticularPostDTO },
  postRepository = PostRepositoryPort,
  { badRequest, ok } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload.data);
  const postHasUpdated = await postRepository.update(payload);
  if (!postHasUpdated) return badRequest("The publication was not found");
  return ok("Post has been updated");
};

module.exports = editAParticularPostUseCase;
