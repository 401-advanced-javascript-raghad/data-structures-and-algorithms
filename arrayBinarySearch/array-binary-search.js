
'use strict';

function binarySearch(arr, target) {
  let index;
  for ( let i=0; i<arr.length ;i++){
    if ( target === arr[i]){
      index = i;
    }
  }
  return index || -1;
}
let array = [11, 22, 33, 44, 55, 66, 77];
let numTarget = 33;
binarySearch(array, numTarget);

module.exports = binarySearch;