const { makeErrorPattern, Errors } = require("@/shared/error");

const validateReceivedPublication = (payload) => {
  const payloadValues = Object.values(payload);

  const isNotString = (prop) => typeof prop !== "string";
  const hasInvalidPayloadProp = payloadValues.some(isNotString);

  if (hasInvalidPayloadProp) {
    throw makeErrorPattern({ type: Errors.BAD_REQUEST, payload: "Received publication to be wrong" });
  }
};

module.exports = validateReceivedPublication;
