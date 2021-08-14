require("./shared/config/module-alias");
const { mongoHelper } = require("@/adapters/database/mongodb/helpers");
const { env } = require("@/shared/config");

mongoHelper
  .connect(env.MONGO_URL)
  .then(async () => {
    const app = require("./app");
    app.listen(env.PORT, () => console.log(`Online at ${env.PORT}`));
  })
  .catch(console.error);
