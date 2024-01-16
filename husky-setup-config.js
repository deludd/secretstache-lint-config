const fs = require("fs");

const setupHuskyAndLintStaged = () => {
    const packageJsonPath = "./package.json";
    if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

        packageJson["lint-staged"] = {
            "*.{js,jsx,ts,tsx}": ["npm run lint:fix", "prettier --write"],
        };

        packageJson.husky = {
            "hooks": {
                "pre-commit": "lint-staged",
            },
        };

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log("Husky and lint-staged configurations have been added to package.json");
    } else {
        console.error("package.json not found!");
    }
};

setupHuskyAndLintStaged();
