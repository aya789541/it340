// testq5exo3.spec.js
const { transferMoney } = require('./bankexo3');
const bankTransfer = require('./bankTransfer');
const bankDAO = require('./bankdaoexo3');

jest.mock('./bankTransfer');
jest.mock('./bankdaoexo3', () => ({
    retrieveBalance: jest.fn(),
    debitAccount: jest.fn()
}));

it("should not call debitAccount if transfer fails", async () => {
    const accountId = 1;
    const amount = 100;

    // Simuler un échec dans la fonction transfer
    bankTransfer.transfer.mockRejectedValue(new Error("Transfert échoué"));

    await expect(transferMoney(accountId, amount)).rejects.toThrow("Transfert échoué");

    // Vérifier que debitAccount n'a pas été appelée
    expect(bankDAO.debitAccount).not.toHaveBeenCalled();
});
