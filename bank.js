const {retrieveBalance}= require('./bankDAO');
//recuperer le solde d'un compte bancaire
function getBalance(){
    retrieveBalance();
}
module.exports = {getBalance};