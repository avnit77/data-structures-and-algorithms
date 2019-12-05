const { binarySearch } = require('../arrayBinarySearch/array-binary-search.js');

describe('binary search function', () => {
    it('should return the index of item that matches array or -1', () => {
        expect(binarySearch([2, 4, 6, 8], 5)).toEqual(-1);
        expect(binarySearch([4, 8, 15, 23, 42], 15)).toEqual(2);
    });
});

