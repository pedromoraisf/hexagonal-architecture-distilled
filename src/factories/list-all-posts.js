const { PostRepositoryMongoDbAdapter } = require("@/adapters/database/mongodb/post-repository");
const { routeAdapter } = require("@/adapters/http/express");
const { listAllPostsUseCase } = require("@/usecases");
const { handleErrorDecorator } = require("@/usecases/decorators");

const makeListAllPosts = async (req, res) => {
  const { payload, ...httpResponses } = routeAdapter(req, res);
  return await handleErrorDecorator(
    () => listAllPostsUseCase(PostRepositoryMongoDbAdapter(), routeAdapter(req, res)),
    httpResponses
  );
};

module.exports = makeListAllPosts;
