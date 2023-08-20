#!/usr/bin/env node

import { execSync } from 'child_process';



const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (error) {
    console.error(`failed to execute`, error);
    return false;
  }
  return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/alymond/typescript-server-setup.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`cloning setup named: ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);
if(!checkOut) process.exit(code: -1);

console.log(`installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if(!installDeps) process.exit(code: -1);

console.log("congrats")
console.log(`cd ${repoName} && npm start`)
