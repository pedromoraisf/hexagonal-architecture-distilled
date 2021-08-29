const { PostRepositoryMongoDbAdapter } = require("@/adapters/database/mongodb/post-repository");
const { routeAdapter } = require("@/adapters/http/express");
const { getSpecificPostUseCase } = require("@/usecases");
const { handleErrorDecorator } = require("@/usecases/decorators");

const makeGetSpecificPost = async (req, res) => {
  const { payload, ...httpResponses } = routeAdapter(req, res);
  return await handleErrorDecorator(
    () => getSpecificPostUseCase(PostRepositoryMongoDbAdapter(), httpResponses)({ payload }),
    httpResponses
  );
};

module.exports = makeGetSpecificPost;
