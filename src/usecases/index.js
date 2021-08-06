const { listAllPostsUseCase } = require("./list-all-posts");
const { createAPostUseCase } = require("./create-an-post");
const { editAParticularPostUseCase } = require("./edit-a-particular-post");

module.exports = { listAllPostsUseCase, createAPostUseCase, editAParticularPostUseCase };
