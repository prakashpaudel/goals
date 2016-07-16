module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "plugins": [
        "react"
    ],

    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    },

    "env": {
      "browser": true,
      "node": true
    },

    "rules": {
      "semi": ["warn", "always"],
      "strict": ["off"],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "error",
      "no-console":"off",
      "comma-dangle": "off",
      "no-unused-vars": "warn",
      "no-mixed-spaces-and-tabs": "warn",
      'no-empty': "off",
    },
};