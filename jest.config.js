const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
