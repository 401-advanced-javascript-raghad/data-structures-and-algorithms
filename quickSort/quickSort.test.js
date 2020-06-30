'use strict';

const quickSort = require('./quickSort');

describe('quickSort',()=>{
  
  it('Can successfully sort an array',()=>{
    let arr = [8,4,23,42,16,15];
    expect(quickSort(arr,0,5)).toEqual([4,8,15,16,23,42]);
  });

  it('Can successfully Reverse-sorted an array',()=>{
    let arr = [20,18,12,8,5,-2];
    expect(quickSort(arr,0,5)).toEqual([-2,5,8,12,18,20]);
  });

  it('Can successfully sort few uniques array',()=>{
    let arr = [5,12,7,5,5,7];
    expect(quickSort(arr,0,5)).toEqual([5,5,5,7,7,12]);
  });

  it('Can successfully sort nearly-sorted array',()=>{
    let arr = [2,3,5,7,13,11];
    expect(quickSort(arr,0,5)).toEqual([2,3,5,7,11,13]);
  });
  
});