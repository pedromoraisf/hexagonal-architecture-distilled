const { listAllPostsUseCase } = require("./list-all-posts");
const { createAnPostUseCase } = require("./create-an-post");
const { editAParticularPostUseCase } = require("./edit-a-particular-post");

module.exports = { listAllPostsUseCase, createAnPostUseCase, editAParticularPostUseCase };
