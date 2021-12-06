const { PostRepositoryPort } = require("@/hexagon/ports/driven/for-post-repository");
const { WebPort } = require("@/hexagon/ports/driver");
const { validateReceivedPublication } = require("@/hexagon/usecases/helpers");
const { CreateAPostDto } = require("@/hexagon/usecases/create-a-post/dto");

const createAPostUseCase =
  (postRepository = PostRepositoryPort, { ok } = WebPort) =>
  async ({ payload = CreateAPostDto }) => {
    validateReceivedPublication(payload);
    const createdPost = await postRepository.create(payload);
    return ok(createdPost);
  };

module.exports = createAPostUseCase;
