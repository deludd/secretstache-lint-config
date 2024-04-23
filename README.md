# eslint-config-secretstache


Integrated ESLint, Prettier configuration package for standardizing code style across company projects

# Install
Run the command below to install the package:
```
yarn add --dev @roots/eslint-config@^6.20.0 eslint@^8.57.0 eslint-config-prettier@^8.10.0 eslint-plugin-prettier@^4.2.1 prettier@3.0.3 prettier-plugin-css-order@^2.0.0 prettier-plugin-multiline-arrays@^3.0.0 eslint-config-secretstache

```

# Usage
Update config in `package.json`:
```
   "eslintConfig": {
    "extends": "eslint-config-secretstache"
  }
```

# Installing Husky
Install lint-staged and husky by running just one command:
```
npx mrm@2 lint-staged
```

Update config in `package.json`:

```
"scripts": {
    //other scripts omitted
    "lint:fix": "eslint --fix --color",
    "format": "prettier --write"
},

  "lint-staged": {
    "resources/**/*.{js,json}": [
      "npm run lint:fix"
    ],
    "resources/**/*.{js,json,css,scss}": [
      "npm run format"
    ]
  },
```
