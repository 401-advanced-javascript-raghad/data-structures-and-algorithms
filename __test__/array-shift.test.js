'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');

describe('array-shift.js', () => {
  it('returns an array a length 1 greater than the input array', () => {
    expect(insertShiftArray([1,2,3,4], 'value').length).toBe(5);
  });
  it('returns an array with the new value added at the middle index for even-lengthed arrays.', () => {
    expect(insertShiftArray([1,2,3,4], 'value')).toEqual([1,2,'value',3,4]);
  });
  it('returns an array with the new value added at the middle index for odd-lengthed arrays.', () => {
    expect(insertShiftArray([1,2,3,4,5], 'value')).toEqual([1,2,3,'value',4,5]);
  });


});