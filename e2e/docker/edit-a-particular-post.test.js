const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

const output = (payload) => console.log(`Edit a Specific Post > ${payload}`);

const TESTABLE_POST_ID = "PUT CREATED POST ID HERE";

fetch(`${env.HOST}:${env.PORT}/edit-a-particular-post/${TESTABLE_POST_ID}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: "{\"data\":{\"title\":\"any_post_edited_title\",\"content\":\"any_post_edited_content\"}}"
})
  .then((res) => res.json())
  .then((json) => output(JSON.stringify(json)))
  .catch(({ message }) => output(JSON.stringify(message)));
