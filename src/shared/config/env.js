require("dotenv").config({
  path: ".env.docker"
});

const env = {
  MONGO_URL: process.env.MONGO_URL,
  HOST: process.env.HOST_URL,
  PORT: process.env.PORT
};

module.exports = env;
