const mergeSort = (arr) => {
  let n = arr.length;
              
  if (n > 1){
    const mid = Math.floor(n / 2);
    console.log(mid);
    const left = arr.slice(0, mid);
    console.log(left);
    const right = arr.slice(mid);
    console.log(right);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};
   
const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
   
  while (i < left.length && j < right.length){
    if (left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    }  
    else{
      arr[k] = right[j];
      j = j + 1; 
    } 
    k = k + 1;
  }
     
  if (i === left.length){
    for (let i = 0; i < right.length; i++) {
      arr[k] = right[i];
      k = k + 1;
    }
  } else {
    for (let i = 0; i < left.length; i++) {
      arr[k] = left[i];
      k = k + 1;
    }
  }
  return arr;
};
   
const array = [8,4,23,42,16,15];
mergeSort(array);
