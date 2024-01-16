# eslint-config-secretstache


Integrated ESLint, Prettier configuration package for standardizing code style across company projects

# Install

```
npm install eslint-config-secretstache
```

# Usage
Install ESlint by running the command: `npm install eslint --save-dev`. In your project, create or update the .eslintrc.js file.
```
module.exports = {
  extends: ['secretstache']
};
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
    "lint:fix": "eslint . --fix"
},

"lint-staged": {
    "*.{js,jsx,ts,tsx}": "npm run lint:fix"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```
