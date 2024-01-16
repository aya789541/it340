// bankTransfer.js
const { getBalance } = require('./bankexo3');

function transfer(accountId, amount) {
    return new Promise((resolve, reject) => {
        const currentBalance = getBalance(accountId);
        if (amount > currentBalance) {
            reject(new Error("Solde insuffisant pour effectuer le transfert."));
        } else {
            // Logique pour effectuer le transfert
            resolve("Transfert réussi");
        }
    });
}

module.exports = { transfer };
