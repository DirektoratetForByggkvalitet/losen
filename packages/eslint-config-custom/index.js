module.exports = {
  extends: ["turbo", "prettier", "react/recommended"],
  rules: {},
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
