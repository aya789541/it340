
function countOcc(tab, target) {

    let result = 0;
    
    for (let j = 0; j < tab.length; j++) {
        if (tab[j] === target) {
            result++;
        }
    }
    
    return result;
}

function displayOcc(tab) {
    const occurrences = countOcc(tab, "lolo");
    
    if (occurrences > 0) {
        console.log("Ce tableau possède une occurrence de " + occurrences);
    } else {
        console.log("Aucune occurrence !");
    }
}

function sumA(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}


const myArray2 = [1, 2, 3, 4, 5];
console.log(sumA(myArray));

const myArray = ["lolo", "abc", "lolo", "xyz", "lolo"];
displayOcc(myArray);