module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },

  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',

    sourceType: 'module',
  },

  plugins: ['react', 'jest'],

  rules: {
    semi: 'off',

    'linebreak-style': ['error', 'unix'],

    indent: ['error', 2],

    quotes: ['error', 'single'],

    eqeqeq: 'error',

    'no-trailing-spaces': 'error',

    'object-curly-spacing': ['error', 'always'],

    'arrow-spacing': ['error', { before: true, after: true }],

    'no-console': 0,
    'no-alert': 0,
    'import/newline-after-import': 'off',

    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'import/prefer-default-export': 'off',

    'no-underscore-dangle': 'off',

    'comma-dangle': 'off',

    'import/no-extraneous-dependencies': 'off',

    'react/jsx-one-expression-per-line': 'off',

    'react/react-in-jsx-scope': 'off',

    'arrow-parens': ['error', 'as-needed'],

    'react/function-component-definition': [
      'error',

      {
        namedComponents: 'arrow-function',

        unnamedComponents: 'arrow-function',
      },
    ],
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    'react/forbid-prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
