const { Post } = require("@/entities");
const { PostRepositoryPort } = require("@/ports/database/post-repository");
const { HttpFrameworkPort } = require("@/ports/http-framework");

const createAnPostUseCase = async (
  { payload = Post },
  postRepository = PostRepositoryPort,
  httpFramework = HttpFrameworkPort
) => {
  validateReceivedPublication(payload);
  try {
    return await postRepository.create(payload);
  } catch {
    return httpFramework.serverError();
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
