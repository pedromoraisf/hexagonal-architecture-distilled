const fetch = require("node-fetch");
const { env } = require("../../src/shared/config");

fetch(`${env.HOST}:${env.PORT}/create-a-post`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: '{"title":"any_post_title","content":"any_post_content"}'
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log("error:" + err));
