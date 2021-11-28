const { HttpFrameworkPort } = require("@/hexagon/ports/driver/http-framework");
const { Errors } = require("@/shared/error");

const handleErrorDecorator = async (cb, { badRequest, serverError } = HttpFrameworkPort) => {
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
