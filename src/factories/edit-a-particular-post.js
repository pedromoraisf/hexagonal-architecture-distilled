const { PostRepositoryMongoDbAdapter } = require("@/adapters/database/mongodb/post-repository");
const { routeAdapter } = require("@/adapters/http/express");
const { editAParticularPostUseCase } = require("@/hexagon/usecases");
const { handleErrorDecorator } = require("@/hexagon/usecases/decorators");

const makeEditAParticularPost = async (req, res) => {
  const { payload, ...httpResponses } = routeAdapter(req, res);
  return await handleErrorDecorator(
    () => editAParticularPostUseCase(PostRepositoryMongoDbAdapter(), httpResponses)({ payload }),
    httpResponses
  );
};

module.exports = makeEditAParticularPost;
