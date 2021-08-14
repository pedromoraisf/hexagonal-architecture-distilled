const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

const TESTABLE_POST_ID = "PUT CREATED POST ID HERE";

fetch(`${env.HOST}:${env.PORT}/get-specific-post/${TESTABLE_POST_ID}`, { method: "GET" })
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch(({ message }) => console.log(message));
