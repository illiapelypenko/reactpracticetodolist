let arr = [1, 34, 65, 2, 67, 9, 3, 2, 1, 5, 79, 8];

let sorted = false;

while (!sorted) {
  sorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    if (a > b) {
      [a, b] = [b, a];
      sorted = false;
    }
    arr[i] = a;
    arr[i + 1] = b;
  }
}

console.log(arr);
