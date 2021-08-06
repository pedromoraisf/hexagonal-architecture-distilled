const { validateReceivedPublication } = require("../helpers");
const { editAParticularPostDTO } = require("./dto");

const editAParticularPostUseCase = async (
  { payload = editAParticularPostDTO },
  postRepository = PostRepositoryPort,
  { ok, serverError } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload.data);
};

module.exports = editAParticularPostUseCase;
