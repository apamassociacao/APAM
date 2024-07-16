module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'fileTransformer.js', 'jest.config.js', 'jest.setup.ts', '*.spec.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import', 'prettier', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'prettier/prettier': 'error',
  },
};
