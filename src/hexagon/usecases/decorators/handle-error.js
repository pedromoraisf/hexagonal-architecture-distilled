const { WebPort } = require("@/hexagon/ports/driver");
const { Errors } = require("@/shared/error");

const handleErrorDecorator = async (cb, { badRequest, serverError } = WebPort) => {
  try {
    return await cb();
  } catch ({ message: error }) {
    const parsedError = JSON.parse(error);
    return {
      [Errors.BAD_REQUEST]: badRequest(parsedError.payload),
      [Errors.SERVER_ERROR]: serverError(parsedError.payload)
    }[parsedError.type];
  }
};

module.exports = handleErrorDecorator;
