module.exports = {
    root: true,
    extends: ["@roots/eslint-config/react", "plugin:prettier/recommended", "prettier"],
    plugins: ["prettier", "prettier-plugin-brace-style"],
    rules: {
        "indent": "off",
        "import/no-default-export": "warn",
        "no-console": "off",
        "no-plusplus": "off",
        "object-curly-newline": "off",
        "prettier/prettier": [
            "error",
            {
                "semi": true,
                "trailingComma": "all",
                "singleQuote": false,
                "printWidth": 80,
                "tabWidth": 4,
                "jsxSingleQuote": false,
                "arrowParens": "always",
                "endOfLine": "auto",
                "quoteProps": "preserve",
                "bracketSpacing": "true",
                "singleAttributePerLine": "true",
                "braceStyle": "allman"
            },
        ],
        "comma-dangle": ["error", "always-multiline"],
        "func-names": "off",
        "semi": [
            "error",
            "always",
            {
                omitLastInOneLineBlock: true,
            },
        ],
        "default-param-last": "off",
        "no-trailing-spaces": "off",
        "no-shadow": "off",
        "max-len": [
            "warn",
            {
                code: 140,
            },
        ],
        "no-underscore-dangle": "off",
        "no-nested-ternary": "off",
        "radix": "off",
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: "return",
            },
        ],
        "quote-props": ["error", "consistent"],
        "react/prop-types": 1,
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": "off",
        "react/prefer-stateless-function": "off",
        "react/jsx-indent-props": ["warn", 4],
        "react/destructuring-assignment": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-danger": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/require-default-props": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-curly-newline": [
            "error",
            {
                multiline: "consistent",
                singleline: "consistent",
            },
        ],
        "react/no-array-index-key": "warn",
        "jsx-quotes": ["warn", "prefer-double"],
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 2,
            },
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens-new-line",
                condition: "parens-new-line",
                logical: "parens-new-line",
                prop: "parens-new-line",
            },
        ],
        // "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
        "react/jsx-curly-spacing": ["error", "always", { "allowMultiline": true }],
        "react/jsx-tag-spacing": [
            "error",
            {
                closingSlash: "never",
                beforeSelfClosing: "always",
                afterOpening: "never",
                beforeClosing: "never",
            },
        ],
    },
};
