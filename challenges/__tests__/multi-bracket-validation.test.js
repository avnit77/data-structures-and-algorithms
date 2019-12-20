const { multiBracketValidation } = require('../multiBracketValidation/multi-bracket-validation');

describe('finds whether brackets in string are balanced', () => {
  it('returns true for single pair of brackets', () => {
    expect(multiBracketValidation('()')).toBeTruthy();
  });
  it('returns true for multiple pairs of brackets with other characters', () => {
    expect(multiBracketValidation('(words{[and}bracket]s)')).toBeTruthy();
  });
  it('returns false if there is only one bracket', () => {
    expect(multiBracketValidation('(')).toBeFalsy();
  });
  it('returns false if the second bracket is not the same', () => {
    expect(multiBracketValidation('(strrring]')).toBeFalsy();
  });
});
