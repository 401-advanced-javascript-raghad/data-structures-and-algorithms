'use strict';

const insertionSort = require('./insertion-sort');

describe('Insertion Sort ',()=>{
  
  it('Can successfully sort an array',()=>{
    let arr = [8,4,23,42,16,15];
    expect(insertionSort(arr)).toEqual([4,8,15,16,23,42]);
  });

  it('Can successfully Reverse-sorted an array',()=>{
    let arr = [20,18,12,8,5,-2];
    expect(insertionSort(arr)).toEqual([-2,5,8,12,18,20]);
  });

  it('Can successfully sort Few uniques array',()=>{
    let arr = [5,12,7,5,5,7];
    expect(insertionSort(arr)).toEqual([5,5,5,7,7,12]);
  });

  it('Can successfully sort Nearly-sorted array',()=>{
    let arr = [2,3,5,7,13,11];
    expect(insertionSort(arr)).toEqual([2,3,5,7,11,13]);
  });

  it('Can successfully handel an empty array',()=>{
    let arr = [];
    expect(insertionSort(arr)).toEqual('Empty array');
  });
  
});