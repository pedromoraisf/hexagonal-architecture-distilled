const express = require("express");

const setupMiddlewares = (app) => {
  app.use(express.json());
};

module.exports = setupMiddlewares;
