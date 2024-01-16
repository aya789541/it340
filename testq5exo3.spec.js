// testq5exo3.spec.js
const { transferMoney } = require('./bankexo3');
const bankTransfer = require('./bankTransfer');
const bankDAO = require('./bankdaoexo3');

jest.mock('./bankTransfer');
jest.mock('./bankdaoexo3', () => ({
    retrieveBalance: jest.fn(),
    debitAccount: jest.fn()
}));

it('should call debitAccount on successful transfer', async () => {
    const accountId = 1;
    const amount = 100;

    bankTransfer.transfer.mockResolvedValue('Transfert réussi');

    await transferMoney(accountId, amount);

    expect(bankDAO.debitAccount).toHaveBeenCalledWith(accountId, amount);
});
