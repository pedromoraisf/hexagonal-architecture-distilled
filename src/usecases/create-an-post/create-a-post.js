const { PostRepositoryPort } = require("@/ports/database/post-repository");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { Errors } = require("@/shared/error");
const { validateReceivedPublication } = require("../helpers");
const { createAnPostDTO } = require("./dto");

const createAPostUseCase = async (
  { payload = createAnPostDTO },
  postRepository = PostRepositoryPort,
  { ok, serverError, badRequest } = HttpFrameworkPort
) => {
  try {
    validateReceivedPublication(payload);
    const createdPost = await postRepository.create(payload);
    return ok(createdPost);
  } catch ({ message: error }) {
    const parsedError = JSON.parse(error);
    return {
      [Errors.BAD_REQUEST]: badRequest(parsedError.payload),
      [Errors.SERVER_ERROR]: serverError(parsedError.payload)
    }[parsedError.type];
  }
};

module.exports = createAPostUseCase;
