const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { editAParticularPostDTO } = require("./dto");

const ExceptionEnums = {
  NOT_FOUND: 404
};

const editAParticularPostUseCase = async (
  { payload = editAParticularPostDTO },
  postRepository = PostRepositoryPort,
  { badRequest } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload.data);

  const postHasUpdated = await postRepository.update(payload);
  if (!postHasUpdated) return badRequest("The publication was not found");
};

module.exports = editAParticularPostUseCase;
