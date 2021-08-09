const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
