module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    /* ====== OFF ====== */
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'p'

    /* ====== ERROR ====== */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '(?:^|\\W)_|type(?:$|\\W)|of(?:$|\\W)|returns(?:$|\\W)',
        varsIgnorePattern: '(?:^|\\W)_|type(?:$|\\W)|of(?:$|\\W)|returns(?:$|\\W)',
      },
    ],
  },
};
