// FIBONACCI
function fibs(num) {
  let a = 0;
  let b = 1;

  if (num === 1) {
    return [a];
  }

  if (num === 2) {
    return [a, b];
  }

  let arr = [a, b];
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  return arr;
}

function fibsRec(num) {
  if (num === 1) {
    return [0];
  }

  if (num === 2) {
    return [0, 1];
  }

  let arr = fibsRec(num - 1);
  let lastFib = fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3];
  arr.push(lastFib);

  return arr;
}

console.log(fibs(8));
console.log(fibsRec(8));

// MERGE SORT
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);
  mergeSort(left);
  mergeSort(right);

  return merge(left, right);
}

function merge(arr1, arr2) {
  let mergeArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }

  if (arr1.length < arr2.length) {
    mergeArr = [mergeArr, ...arr2.slice(arr1.length)];
  } else if (arr1.length > arr2.length) {
    mergeArr = [mergeArr, ...arr1.slice(arr2.length)];
  }

  return mergeArr;
}

let array = [5, 4, 2, 1, 4, 1, 3, 8, 9, 6, 7];
console.log(mergeSort(array));
