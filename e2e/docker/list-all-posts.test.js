const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

const output = (payload) => console.log(`List All Posts > ${payload}`);

fetch(`${env.HOST}:${env.PORT}/list-all-posts`, { method: "GET" })
  .then((res) => res.json())
  .then((json) => output(JSON.stringify(json)))
  .catch((err) => output("error:" + err));
