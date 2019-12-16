const { insertIntoArray, removeMiddle } = require('../array-shift/array-shift.js');

// describe('array shift function', () => {
//     it('should input a value into the middle of an array', () => {
//         expect(insertIntoArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
//         expect(insertIntoArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
//     });
// });

describe('array remove middle function', () => {
  it('should take out middle value and other elements should fill gap', () => {
    expect(removeMiddle([2, 4, 5, 6, 8])).toEqual([2, 4, 6, 8]);
    expect(removeMiddle([4, 8, 15, 16, 23, 42])).toEqual([4, 8, 15, 23, 42]);
  });
});
