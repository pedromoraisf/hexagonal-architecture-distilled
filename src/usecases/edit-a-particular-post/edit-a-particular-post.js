const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("@/usecases/helpers");
const { EditAParticularPostDTO } = require("@/usecases/edit-a-particular-post/dto");

const editAParticularPostUseCase =
  (postRepository = PostRepositoryPort, { badRequest, ok } = HttpFrameworkPort) =>
  async ({ payload = EditAParticularPostDTO }) => {
    validateReceivedPublication(payload.data);
    const postHasUpdated = await postRepository.update(payload);
    if (!postHasUpdated) return badRequest("The publication was not found");
    return ok("Post has been updated");
  };

module.exports = editAParticularPostUseCase;
