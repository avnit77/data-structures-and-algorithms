function reverseArray(array) {
    for(var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
        let el = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = el;
    }
    return array;
}


function reverseArrayAgain(array) {
    var newArray = [];
    for(var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

let testArray = [1, 2, 3, 4, 5];

console.log(reverseArray(testArray));
console.log(reverseArrayAgain(testArray));