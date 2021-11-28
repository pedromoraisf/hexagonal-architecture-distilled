const { PostRepositoryPort } = require("@/hexagon/ports/driven/database/post-repository");
const { HttpFrameworkPort } = require("@/hexagon/ports/driver/http-framework");
const { validateReceivedPublication } = require("@/hexagon/usecases/helpers");
const { CreateAPostDTO } = require("@/hexagon/usecases/create-a-post/dto");

const createAPostUseCase =
  (postRepository = PostRepositoryPort, { ok } = HttpFrameworkPort) =>
  async ({ payload = CreateAPostDTO }) => {
    validateReceivedPublication(payload);
    const createdPost = await postRepository.create(payload);
    return ok(createdPost);
  };

module.exports = createAPostUseCase;
