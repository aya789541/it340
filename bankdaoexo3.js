// bankDAO.js
function retrieveBalance(accountId) {
    console.log("Retrieve balance for account:", accountId);
   
}

function debitAccount(accountId, amount) {
    console.log(`Débit de ${amount} du compte ${accountId}`);
    
}

module.exports = { retrieveBalance, debitAccount };
