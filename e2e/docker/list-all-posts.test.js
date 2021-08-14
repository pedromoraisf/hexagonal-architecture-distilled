const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

fetch(`${env.HOST}:${env.PORT}/list-all-posts`, { method: "GET" })
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
