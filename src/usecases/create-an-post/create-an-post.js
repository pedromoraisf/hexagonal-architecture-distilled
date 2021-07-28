const { Post } = require("@/entities");
const { PostRepositoryPort } = require("@/ports/database/post-repository");
const { HttpFrameworkPort } = require("@/ports/http-framework");

const createAnPostUseCase = async (
  { payload = Post },
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

const validateReceivedPublication = (payload) => {
  const payloadValues = Object.values(payload);

  const isNotString = (prop) => typeof prop !== "string";
  const hasInvalidPayloadProp = payloadValues.some(isNotString);

  if (hasInvalidPayloadProp) {
    throw new Error("Received publication to be wrong");
  }
};

module.exports = createAnPostUseCase;
