const { MongoClient } = require("mongodb");

const mongoHelper = {
  client: null,
  url: "",
  async connect(url) {
    this.url = url;
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  },
  async disconnect() {
    await this.client.close();
    this.client = null;
  },
  async getCollection(name) {
    if (!this.client?.topology?.isConnected()) await this.connect(this.url);
    return this.client.db().collection(name);
  }
};

module.exports = mongoHelper;
