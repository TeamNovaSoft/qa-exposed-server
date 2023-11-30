const { repositories } = require('../config');
const { getCurrentBranch } = require('../utils/git');

const renderHomeView = (req, res) => {
    const repositoriesWithBranches = repositories.map(repository => {
        const currentBranch = getCurrentBranch(repository.location);
        
        return {
            ...repository,
            currentBranch
        };
    });

    res.render('main', { layout: 'index', repositories: repositoriesWithBranches });
};

module.exports = {
    renderHomeView
};