const validateReceivedPublication = (payload) => {
  const payloadValues = Object.values(payload);

  const isNotString = (prop) => typeof prop !== "string";
  const hasInvalidPayloadProp = payloadValues.some(isNotString);

  if (hasInvalidPayloadProp) {
    throw new Error("Received publication to be wrong");
  }
};

module.exports = validateReceivedPublication;
