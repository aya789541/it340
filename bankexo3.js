const { retrieveBalance, updateBalance } = require('./bankdaoexo3');

// bank.js
const { debitAccount } = require('./bankdaoexo3');

function transferMoney(accountId, amount) {
    // Appele la fonction transfer (définie dans bankTransfer.js)
   
    const transferPromise = require('./bankTransfer').transfer(accountId, amount);

    // Gérer la promesse
    return transferPromise
        .then(() => {
            // Si le transfert est réussi, appeler debitAccount
            return debitAccount(accountId, amount);
        })
        .catch(error => {
            // Gérer l'erreur, par exemple en la loggant ou en la renvoyant
            console.error(error);
            throw error; // Renvoyer l'erreur pour traitement ultérieur
        });
}

module.exports = { transferMoney };
