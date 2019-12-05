function insertIntoArray(array, value) {
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

const removeMiddle = (array) => {
    const newArray = [];
    const midpoint = Math.floor((array.length) / 2);

    for(let i = 0; i < array.length - 1; i++){
        if(i < midpoint){
            newArray[i] = array[i];
        }
        if(i >= midpoint){
            newArray[i] = array[i + 1];
        }
    }

    return newArray;
};

module.exports = { insertIntoArray, removeMiddle };
