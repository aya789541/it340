//exercice1
// passwordValidator.spec.js
const validatePassword = require('./mdp');

describe("Password Validator", () => {
    test("should validate that the password is at least 8 characters long", () => {
        expect(validatePassword("1234567")).toEqual(false);
        expect(validatePassword("12345678")).toEqual(true);
    });

    test("should validate that the password contains at least one digit", () => {
        expect(validatePassword("abcdefgh")).toEqual(false);
        expect(validatePassword("abcd3fgh")).toEqual(true);
    });

    test("should validate that the password contains at least one letter", () => {
        expect(validatePassword("12345678")).toEqual(false);
        expect(validatePassword("1a345678")).toEqual(true);
    });

    test("should validate that the password contains at least one special character", () => {
        expect(validatePassword("1234abcd")).toEqual(false);
        expect(validatePassword("1234ab!c")).toEqual(true);
    });
    //la possibilité de paramétrer les règles (longueur, nombre de chiffres et de lettres, liste de caractères spéciaux)
    test("should validate with custom options", () => {
        const options = {
            minLength: 10,
            requireDigit: false,
            requireLetter: true,
            requireSpecialChar: true,
            specialChars: "!@#"
        };
        expect(validatePassword("abcdefghij", options)).toEqual(false);
        expect(validatePassword("abcdefghi!", options)).toEqual(true);
    });
   
});

