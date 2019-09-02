module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    __DEV__: 'readonly',
    SharedArrayBuffer: 'readonly',
    fetch: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', 'jest'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-triple-slash-reference': 0,
    '@typescript-eslint/prefer-interface': 0,
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'], // relative imports are allowed only up two one directory above the current
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      typescript: {},
    },
  },
};
