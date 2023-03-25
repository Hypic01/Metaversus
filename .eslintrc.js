module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    "eslint-plugin-import"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
     "react/prop-types": "off",
     "import/extensions": "error",
    "import/no-unresolved": "error"
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
      'eslint-import-resolver-typescript': true,
    },
  },
};
