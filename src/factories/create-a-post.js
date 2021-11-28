const { PostRepositoryMongoDbAdapter } = require("@/adapters/database/mongodb/post-repository");
const { routeAdapter } = require("@/adapters/http/express");
const { createAPostUseCase } = require("@/hexagon/usecases");
const { handleErrorDecorator } = require("@/hexagon/usecases/decorators");

const makeCreateAPost = async (req, res) => {
  const { payload, ...httpResponses } = routeAdapter(req, res);
  return await handleErrorDecorator(
    () => createAPostUseCase(PostRepositoryMongoDbAdapter(), httpResponses)({ payload }),
    httpResponses
  );
};

module.exports = makeCreateAPost;
