// .eslintrc.cjs
module.exports = {
    ignorePatterns: ['node_modules/', 'dist/', 'build/'],
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended-legacy',
    ],
    plugins: ['react', 'react-hooks', 'perfectionist', 'react-refresh'],
    rules: {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        "semi": ["error", "always"],
        'react/react-in-jsx-scope': 'off',
        'perfectionist/sort-imports': ['error', {
            type: 'alphabetical',
        }],
        'perfectionist/sort-exports': ['error', {
            type: 'alphabetical',
        }],
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/prop-types': ['error',],
    },
    settings: { react: { version: 'detect' } },
};
  