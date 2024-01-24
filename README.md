# eslint-config-secretstache


Integrated ESLint, Prettier configuration package for standardizing code style across company projects

# Install
Run the command below to install the package:
```
yarn add eslint-config-secretstache eslint@">=7.32.0 <9.0.0" eslint-plugin-prettier@^5.1.2 eslint-config-prettier@^9.1.0 prettier@^3.1.1 @roots/bud-eslint@^6.17.0 @roots/eslint-config@^6.16.1 --dev

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
