const { retrieveBalance } = require('./bankdao56');

function getBalance(accountId) {
    return retrieveBalance(accountId);
}

module.exports = { getBalance };
