/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^losen$": "<rootDir>",
    "^(primitives|components|styles|state|utils)(/.*)?$": "<rootDir>/$1$2",
  },
};
