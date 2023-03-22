'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort(compareYear);
  // console.log(arr);
  return arr;
}


function compareYear(a, b) {
  //do the thing
  if(a.year === b.year) return 0;
  if (a.year < b.year) return 1;
  if (a.year > b.year) return -1;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}


function compareTitle(a, b) {
  //do the thing
  if(a.title === b.title) return 0;
  if (a.title < b.title) return 1;
  if (a.title > b.title) return -1;
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
