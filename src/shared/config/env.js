require("dotenv").config({
  path: {
    dev: ".env",
    docker: ".env.docker"
  }[process.env.NODE_ENV]
});

const env = {
  MONGO_URL: process.env.MONGO_URL,
  HOST: process.env.HOST,
  PORT: process.env.PORT
};

module.exports = env;
