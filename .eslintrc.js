module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
  overrides: [
    {
      files: [
        "**/pages/**/*.{js,ts,vue}",
        "**/layouts/**/*.{js,ts,vue}",
        "**/app.{js,ts,vue}",
        "**/error.{js,ts,vue}"
      ],
      rules: {
        "vue/multi-word-component-names": "off",
        "vue/no-multiple-template-root": "off",
        "vue/html-self-closing": "off",
        "linebreak-style": ["off", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn"
      }
    }
  ]
};
