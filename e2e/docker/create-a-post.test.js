const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

const output = (payload) => console.log(`Create a Post > ${payload}`);

fetch(`${env.HOST}:${env.PORT}/create-a-post`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: '{"title":"any_post_title","content":"any_post_content"}'
})
  .then((res) => res.json())
  .then((json) => output(JSON.stringify(json)))
  .catch((err) => output("error:" + err));
