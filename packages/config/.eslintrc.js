module.exports = {
  plugins: ["react", "jsx-a11y", "react-hooks", "promise"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard",
    "plugin:react/recommended",
  ],
  // "parser": "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { legacyDecorators: true },
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
    localStorage: true,
    sessionStorage: true,
    IntersectionObserver: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    indent: "off", // Causes conflict with Prettier
    "no-throw-literal": "off",
    camelcase: 0,
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "no-undef": ["warn"],
    "no-alert": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-labels": 2,
    "no-eq-null": 0,
    "no-use-before-define": 0,
    // Allow == only when comparing with null
    eqeqeq: ["error", "always", { null: "ignore" }],
    "linebreak-style": [0, "unix"],
    "no-nested-ternary": 2,
    "no-warning-comments": [
      0,
      {
        terms: ["todo", "fixme", "xxx"],
        location: "start",
      },
    ],
    complexity: [2, 17],
    "consistent-this": [0, "that"],
    radix: 2,
    "prefer-const": 2,
    "dot-notation": 2,
    "no-loop-func": 2,
    "one-var": [
      2,
      {
        initialized: "never",
        uninitialized: "always",
      },
    ],
    "object-shorthand": 2,
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "prefer-spread": 2,
    "prefer-template": 2,
    "comma-dangle": ["error", "always-multiline"],
    // "no-restricted-imports": [
    //   "error",
    //   {
    //     "paths": ["assets", "components", "lib", "pages", "styles"],
    //     "patterns": ["assets/*", "components/*", "lib/*", "pages/*", "styles/*"]
    //   }
    // ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index", "unknown"],
        ],
        "newlines-between": "always",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // "multiline-ternary: "error"; added by Standard v. 15 - Conflicts with 'operator-linebreak'
    "multiline-ternary": "off",
    /// NEW
    "react/display-name": 0,
    "react/prop-types": "off",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
        camelcase: 0,
        "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
        "no-alert": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-extra-boolean-cast": "off",
        "no-labels": 2,
        "no-eq-null": 0,
        "linebreak-style": [0, "unix"],
        "no-nested-ternary": 2,
        "no-warning-comments": [
          0,
          {
            terms: ["todo", "fixme", "xxx"],
            location: "start",
          },
        ],
        complexity: [2, 17],
        "consistent-this": [0, "that"],
        radix: 2,
        "prefer-const": 2,
        "one-var": [
          2,
          {
            initialized: "never",
            uninitialized: "always",
          },
        ],
        "object-shorthand": 2,
        "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
        "prefer-spread": 2,
        "prefer-template": 2,
        "comma-dangle": "off",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              ["internal", "parent", "sibling", "index", "unknown"],
            ],
            "newlines-between": "always",
          },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        // "multiline-ternary: "error"; added by Standard v. 15 - Conflicts with 'operator-linebreak'
        "multiline-ternary": "off",

        // Typescript Specific
        "@typescript-eslint/no-explicit-any": "warn",

        // Requires all functions to specify their return type
        "@typescript-eslint/explicit-function-return-type": "off",
        // Forces naming conventions - this makes it harder to destructure code from the API in certain cases
        "@typescript-eslint/naming-convention": "off",
        // Conflicts with prettier
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        // Prevents using this common pattern: const { register, watch } = useForm()
        "@typescript-eslint/unbound-method": "off",
        // This prevents setting 'any' as a type,
        // To make the transition to Typescript easier let's allow this
        // for now, but try to avoid it
        "@typescript-eslint/no-unsafe-assignment": "off",
        // Same as above; prevents referencing parameters on `any` types
        // We should try to avoid this, but let's not enforce it for now
        "@typescript-eslint/no-unsafe-member-access": "off",
        // Same as above, function calls
        "@typescript-eslint/no-unsafe-call": "off",
        // Same as above, returns
        "@typescript-eslint/no-unsafe-return": "off",
        // This just does not work in cases where you actually have boolean operations
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        // This is a bit too specific
        "@typescript-eslint/prefer-regexp-exec": "off",
        // Different usecases
        "@typescript-eslint/consistent-type-assertions": "off",
        // Different usecases
        "@ts-expect-error": "off",
        "@typescript-eslint/no-throw-literal": "off",
        // Void should be used in conjunction with calling promises that are not awaited
        "no-void": "off",
        // There is a TS specific one that works better
        "unused-vars": "off",
        // We know what we are doing
        "@typescript-eslint/no-dynamic-delete": "off",

        // NEW
        "react/display-name": 0,
      },
    },
  ],
};
