const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

const output = (payload) => console.log(`Get a Specific Post > ${payload}`);

const TESTABLE_POST_ID = "PUT CREATED POST ID HERE";

fetch(`${env.HOST}:${env.PORT}/get-specific-post/${TESTABLE_POST_ID}`, { method: "GET" })
  .then((res) => res.json())
  .then((json) => output(JSON.stringify(json)))
  .catch(({ message }) => output(JSON.stringify(message)));
