
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

// Exécuter la fonction avec un exemple
const myArray = ["lolo", "abc", "lolo", "xyz", "lolo"];
displayOccurrences(myArray);
