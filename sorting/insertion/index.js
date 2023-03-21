'use strict';

function insert(sorted, value) {
  let i = 0;
  while (value > sorted.length) {
    i++;
  }

  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  sorted.push(value);

}



function InsertionSort(input) {
  let sorted = [];
  sorted[0] = [input[0]];

  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;

}

module.exports = { InsertionSort, insert };

