const { execSync } = require('child_process');

function executeGitCommand(command) {
  return execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '');
}

const getCurrentBranch = (repositoryPath) => {
    return executeGitCommand(`git -C ${repositoryPath} rev-parse --abbrev-ref HEAD`);
}

module.exports = { getCurrentBranch }
