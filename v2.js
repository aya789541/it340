
// Refactoring :  indentation, paramètres, responsabilité, utilisation de fonctions prédéfinies
//calcul  de  l'occurence dans  mon  tableau 
function countOccurrences(tab, target) {
    return tab.filter(item => item === target).length;
}
//affichage de  nombre d'occurence 
function displayOccurrences(tab) {
    const occurrences = countOccurrences(tab, "lolo");
    
    if (occurrences > 0) {
        console.log(`Ce tableau possède ${occurrences} occurrence(s)`);
    } else {
        console.log("Aucune occurrence !");
    }
}
// Refactoring : Découpage en modules, indentation, paramètres, responsabilité
//calcul de  somme  de tableau
function calculateArraySum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

// Exécuter la fonction de calcul de somme  avec un exemple
const myArray2 = [1, 2, 3, 4, 5];
console.log(`La somme du tableau est : ${calculateArraySum(myArray2)}`);

// Exécuter la fonction  de  calcul d'occurence et d'affichage avec un exemple
const myArray = ["lolo", "abc", "lolo", "xyz", "lolo"];
displayOccurrences(myArray);
