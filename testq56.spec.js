// main.spec.js
const bank = require('./bankq56');
const bankDAO = require('./bankdao56');


describe.only("Bank Tests", () => {
    test("retrieveBalance is called with accountId", () => {
        const spy = jest.spyOn(bankDAO, "retrieveBalance");
        const accountId = 123;

        bank.getBalance(accountId);
        
        expect(spy).toHaveBeenCalledWith(accountId);
    });
});