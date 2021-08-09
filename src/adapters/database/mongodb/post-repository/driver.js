const { nanoid } = require("nanoid");

const sutDriver = (sut) => ({
  async clearDatabase() {
    return sut.deleteMany({});
  },
  async createPostAndReturnId(fixture = {}) {
    return sut.insertOne({
      ...fixture,
      _id: nanoid()
    });
  }
});

module.exports = sutDriver;
