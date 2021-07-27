const { Post } = require("@/entities");
const { PostRepositoryPort } = require("@/ports/database/post-repository");

const createAnPostUseCase = async (
  { payload = Post },
  postRepository = PostRepositoryPort
) => {
  validateReceivedPublication(payload);
  try {
    return await postRepository.create(payload);
  } catch {
    throw new Error("Operational error");
  }
};

const validateReceivedPublication = (payload) => {
  const payloadValuesToArray = Object.values(payload);
  const hasInvalidPayloadProp = payloadValuesToArray.some(
    (prop) => typeof prop !== "string"
  );
  if (hasInvalidPayloadProp) {
    throw new Error("Received publication to be wrong");
  }
};

module.exports = createAnPostUseCase;
