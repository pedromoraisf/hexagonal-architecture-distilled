const { PostToCreateDTO, PostToEditDTO, PostToGetDTO } = require("@/hexagon/ports/driven/database/post-repository/dto");

const PostRepositoryInMemoryAdapter = () => ({
  posts: [],
  create: function (payload = PostToCreateDTO) {
    this.posts.push({ ...payload, _id: "any_id" });
    const LATEST_POSITION = this.posts.length - 1;
    return Promise.resolve(this.posts[LATEST_POSITION]);
  },
  listAll: function () {
    return Promise.resolve(this.posts);
  },
  update: function (payload = PostToEditDTO) {
    const findedPostIndex = this.posts.findIndex((post) => post._id === payload.id);
    const NOT_FINDED = -1;
    if (findedPostIndex === NOT_FINDED) {
      return Promise.resolve(false);
    }

    this.posts.splice(findedPostIndex, 1, { ...payload.data, _id: payload.id });

    return Promise.resolve(true);
  },
  listOne: function (payload = PostToGetDTO) {
    const findedPost = this.posts.find((post) => post._id === payload.id);
    return Promise.resolve(findedPost || false);
  }
});

module.exports = PostRepositoryInMemoryAdapter;
