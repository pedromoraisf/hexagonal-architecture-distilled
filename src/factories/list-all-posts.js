const { PostRepositoryMongoDbAdapter } = require("@/adapters/database/mongodb/post-repository");
const { routeAdapter } = require("@/adapters/http/express");
const { listAllPostsUseCase } = require("@/hexagon/usecases");
const { handleErrorDecorator } = require("@/hexagon/usecases/decorators");

const makeListAllPosts = async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { _, ...httpResponses } = routeAdapter(req, res);
  return await handleErrorDecorator(
    () => listAllPostsUseCase(PostRepositoryMongoDbAdapter(), routeAdapter(req, res))(),
    httpResponses
  );
};

module.exports = makeListAllPosts;
