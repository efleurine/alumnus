module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 8
  },
  "rules": {
    "semi": 'off',
    "indent": ["error", 2],
    "no-console": ["error", {
      allow: ["warn", "error"]
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
  },
};