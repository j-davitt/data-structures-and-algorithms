'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    if(!this.buckets[position]){
      this.buckets[position] = {};
    }
    this.buckets[position][key] = value;
  }

  get(key){
    let position = this.hash(key);
    if(this.buckets[position]){
      let value = this.buckets[position][key];
      return value;
    } else {
      return null;
    }
  }

  has(key){
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let key in this.buckets[i]) {
          keysArr.push(key);
        }
      }
    }
    return keysArr;
  }
}

function repeatedWord(str){
  const table = new HashTable(1024);
  let punctuation = [',', '.', ';', ':', '-', '_', '!', '?'];
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(!punctuation.includes(str[i])){
      newStr += str[i];
    }
  }

  let wordArr = newStr.split(' ');

  for(let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i].toLowerCase();
    if(table.has(word)){
      return word;
    } else {
      table.set(word, true);
    }
  }
  return null;
}


const leftJoin = (left, right) => {
  let result = [];
  let leftKeys = left.keys();
  for(let i = 0; i < leftKeys.length; i++){
    let key = leftKeys[i];
    let value = left.get(key);
    let rightValue = right.get(key);
    result.push([key, value, rightValue]);
  }
  return result;
};


module.exports = { HashTable, repeatedWord, leftJoin };
