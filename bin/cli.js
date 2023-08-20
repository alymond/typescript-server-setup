#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Failed to execute '${command}':`, error);
    return false;
  }
};

const repoName = process.argv[2];

if (!repoName) {
  console.error('Please provide a repository name.');
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/alymond/typescript-server-setup.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning setup named: ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) {
  console.error('Failed to clone repository.');
  process.exit(1);
}

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  console.error('Failed to install dependencies.');
  process.exit(1);
}

console.log('Congratulations! The setup is complete.');
console.log(`To start the project, run: cd ${repoName} && npm start`);
