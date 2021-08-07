const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { Errors } = require("@/shared/error");
const { validateReceivedPublication } = require("../helpers");
const { editAParticularPostDTO } = require("./dto");

const editAParticularPostUseCase = async (
  { payload = editAParticularPostDTO },
  postRepository = PostRepositoryPort,
  { badRequest, serverError, ok } = HttpFrameworkPort
) => {
  try {
    validateReceivedPublication(payload.data);
    const postHasUpdated = await postRepository.update(payload);
    if (!postHasUpdated) return badRequest("The publication was not found");
    return ok("Post has been updated");
  } catch ({ message: error }) {
    const parsedError = JSON.parse(error);
    return {
      [Errors.BAD_REQUEST]: badRequest(parsedError.payload),
      [Errors.SERVER_ERROR]: serverError(parsedError.payload)
    }[parsedError.type];
  }
};

module.exports = editAParticularPostUseCase;
