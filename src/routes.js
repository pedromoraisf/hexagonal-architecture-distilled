const { makeCreateAPost, makeListAllPosts, makeGetSpecificPost, makeEditAParticularPost } = require("./factories");

const setupRoutes = (app) => {
  app.post("/create-a-post", makeCreateAPost);
  app.get("/list-all-posts", makeListAllPosts);
  app.get("/get-specific-post/:id", makeGetSpecificPost);
  app.put("/edit-a-particular-post/:id", makeEditAParticularPost);
};

module.exports = setupRoutes;
