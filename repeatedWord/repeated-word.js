'use strict';
function hash(key,size){
  return key.split('').reduce((p, n) => {
    return p + n.charCodeAt(0);
  }, 0) * 599 % size;
}

function repeatedWord(str) {
  let words = str.split(/[., -!?]/g);
  let hashmap = new Array(words.length * 10);

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue;
    let index = hash(words[i].toLowerCase(), hashmap.length);

    if (hashmap[index]) {
      let hash = hashmap[index];
      while (hash) {
        if (hash.key === words[i].toLowerCase()) return hash.key;
        hash = hash.next;
      }

      hashmap[index] = {
        key: words[i].toLowerCase(),
        next: hashmap[index],
      };
    }

    else {
      hashmap[index] = { key: words[i].toLowerCase() };
    }
  }

  return null;
}

module.exports = repeatedWord;