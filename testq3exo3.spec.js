// bank.test.js
const { transferMoney } = require('./bankexo3');
const bankTransfer = require('./bankTransfer');

jest.mock('./bankTransfer');

describe('transferMoney function', () => {
    it('should call transfer with correct parameters', async () => {
        const accountId = 1;
        const amount = 100;
        bankTransfer.transfer.mockResolvedValue('Transfert réussi');

        await transferMoney(accountId, amount);

        expect(bankTransfer.transfer).toHaveBeenCalledWith(accountId, amount);
    });
});
