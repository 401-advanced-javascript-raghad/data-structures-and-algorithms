'use strict';

function left_join(first, second) {

  let final = [];

  for (const key in first) {
    let arr = [];
    arr.push(key, first[key]);

    if (second[key]) { arr.push(second[key]);}
    else {  arr.push(null); }
       
    final.push(arr);

  }
  return final;
}

module.exports = left_join;