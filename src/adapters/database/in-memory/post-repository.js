const { PostToCreateDTO } = require("@/ports/database/post-repository");

const PostRepositoryInMemoryAdapter = () => ({
  posts: [],
  create: function (payload = PostToCreateDTO) {
    this.posts.push(payload);
    return Promise.resolve(!!this.posts.length);
  },
});

module.exports = PostRepositoryInMemoryAdapter;
