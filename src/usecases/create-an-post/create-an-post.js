const { PostRepositoryPort } = require("@/ports/database/post-repository");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { createAnPostDTO } = require("./dto");

const createAnPostUseCase = async (
  { payload = createAnPostDTO },
  postRepository = PostRepositoryPort,
  { ok, serverError } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload);
  try {
    const createdPost = await postRepository.create(payload);
    return ok(createdPost);
  } catch {
    return serverError();
  }
};

module.exports = createAnPostUseCase;
