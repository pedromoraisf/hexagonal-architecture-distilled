const sutDriver = (sut) => ({
  async clearDatabase() {
    return sut.deleteMany({});
  }
});

module.exports = sutDriver;
