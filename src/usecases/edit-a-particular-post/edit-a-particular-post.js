const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { editAParticularPostDTO } = require("./dto");

const editAParticularPostUseCase = async (
  { payload = editAParticularPostDTO },
  postRepository = PostRepositoryPort,
  { ok, serverError } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload.data);
  const postHasUpdated = await postRepository.update(payload);
};

module.exports = editAParticularPostUseCase;
