function insertShiftArray(array, value) {
    const newArray = [];
    const midpoint = Math.ceil((array.length) / 2);


    for(let i = 0; i < array.length; i++) {
        if(i < midpoint) {
            newArray[i] = array[i];
        } else if(i === midpoint) {
            newArray[i] = value;
        } else if(i > midpoint) {
            newArray[i] = array[i - 1];
        }
    }
    return newArray;
}

let testArray = [1, 2, 3, 4, 5];
let testValue = 7;
console.log(insertShiftArray(testArray, testValue));