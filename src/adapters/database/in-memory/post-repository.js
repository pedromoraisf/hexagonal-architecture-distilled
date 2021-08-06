const { PostToCreateDTO } = require("@/ports/database/post-repository");

const PostRepositoryInMemoryAdapter = () => ({
  posts: [],
  create: function (payload = PostToCreateDTO) {
    this.posts.push({ ...payload, _id: "any_id" });
    const LATEST_POSITION = this.posts.length - 1;
    return Promise.resolve(this.posts[LATEST_POSITION]);
  },
  listAll: function () {
    return Promise.resolve(this.posts);
  }
});

module.exports = PostRepositoryInMemoryAdapter;
