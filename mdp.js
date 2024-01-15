//exercice1
//Ecrire un programme qui valide que le mot de passe passé en paramètre contient au moins 8 caractères
function hasMinimumLength(password, minLength = 8) {
    return password.length >= minLength;
}



//convertit en chaine de caractere tab et verifie avec some si au moins l'un des carctere  est un chiffre
function containsDigit(password) {
    return Array.from(password).some(char => !isNaN(char) && char !== ' ');
}
//meme chose que containsDigit mais fait ça pour  lettre
function containsLetter(password) {
    return Array.from(password).some(char => /[a-zA-Z]/.test(char));
}
//si il contient des crcteres speciaux
function containsSpecialCharacter(password, specialChars = "!@#$%^&*") {
    return new RegExp(`[${specialChars}]`).test(password);
}

function validatePassword(password, options = {}) {
    const {
        minLength = 8,
        requireDigit = true,
        requireLetter = true,
        requireSpecialChar = true,
        specialChars = "!@#$%^&*"
    } = options;

    if (!hasMinimumLength(password, minLength)) {
        return false;
    }

    if (requireDigit && !containsDigit(password)) {
        return false;
    }

    if (requireLetter && !containsLetter(password)) {
        return false;
    }

    if (requireSpecialChar && !containsSpecialCharacter(password, specialChars)) {
        return false;
    }

    return true;
}



module.exports = validatePassword;
