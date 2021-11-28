const { listAllPostsUseCase } = require("./list-all-posts");
const { createAPostUseCase } = require("./create-a-post");
const { editAParticularPostUseCase } = require("./edit-a-particular-post");
const { getSpecificPostUseCase } = require("./get-specific-post");

module.exports = { listAllPostsUseCase, createAPostUseCase, editAParticularPostUseCase, getSpecificPostUseCase };
