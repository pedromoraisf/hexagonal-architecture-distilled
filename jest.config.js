const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  testEnvironment: "node",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
