const bank = require('./bank');
const bankDAO = require('./bankDAO');


describe.only("Bank Tests", () => {
    test("retrieveBalance is called", () => {
        jest.spyOn(bankDAO,"retrieveBalance")
        
        bank.getBalance();
        
    });

});