import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    {
        ignores: ['src/generated/**'],
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            // Customize JS-specific rules if needed
        },
        extends: ['js/recommended'],
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
        extends: tseslint.configs.recommended,
    },
])
