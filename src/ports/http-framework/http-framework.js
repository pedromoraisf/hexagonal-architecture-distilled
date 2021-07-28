const HttpFrameworkPort = {
  serverError: (message = "") => {
    throw new Error("NOT_IMPLEMENTED");
  },
  ok: (data) => {
    throw new Error("NOT_IMPLEMENTED");
  }
};

module.exports = HttpFrameworkPort;
