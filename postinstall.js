const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function copyFile(source, target) {
    const sourcePath = path.join(__dirname, source);
    const targetPath = path.join(process.cwd(), target);

    if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Created ${target}`);
    } else {
        console.log(`${target} already exists.`);
    }
}

function setupESLint() {
    copyFile(".eslintrc.cjs", ".eslintrc.cjs");
}

function setupHusky() {
    if (!fs.existsSync(path.join(process.cwd(), ".husky"))) {
        execSync("npx husky install");
    }
    copyFile(".husky/pre-commit", ".husky/pre-commit");
    execSync("chmod +x .husky/pre-commit");
}

setupESLint();
setupHusky();
