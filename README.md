# eslint-config-secretstache


Integrated ESLint, Prettier configuration package for standardizing code style across company projects

# Install

```
yarn add eslint-config-secretstache
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
