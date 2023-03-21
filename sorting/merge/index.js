'use strict';

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n - 1);

    mergeSort(left);
    mergeSort(right);

    mergeSort(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] === right[j]){
      arr[k] = left[i];
      i+=1;
    } else {
      arr[k] = right[j];
      j+=1;
    }
    k+=1;
  }
  if(i === left.length){
    arr[k] = right[j];
    k+=1;
    j+=1;
  } else {
    arr[k] = left[i];
    k+=1;
    i+=1;
  }
}
