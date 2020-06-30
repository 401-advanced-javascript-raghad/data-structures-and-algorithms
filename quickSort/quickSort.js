'use strict';

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    // Partition the array by setting the position of the pivot value 
    let position = partition(arr, left, right);
    // Sort the left
    quickSort(arr, left, position - 1);
    // Sort the right
    quickSort(arr, position + 1, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  // set a pivot value as a point of reference
  let pivot = arr[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;
  for (let i = left; i < right; i++) {
    // place the value of the pivot location in the middle.
    // all numbers smaller than the pivot are on the left, larger on the right. 
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  // return the pivot index point
  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

module.exports = quickSort;

