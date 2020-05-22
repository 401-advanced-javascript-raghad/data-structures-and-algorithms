'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');

describe('binarySearch', () => {
  it('returns the index of the target number in the array', () => {
    expect(binarySearch([1,2,3,-4], 3)).toEqual(2);
  });
  it('returns -1 if the target number is not exist in the array', () => {
    expect(binarySearch([1,2,3,-4], 6)).toEqual(-1);
  });
});