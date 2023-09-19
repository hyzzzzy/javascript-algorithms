function solution(target, arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  arr.sort((a, b) => a - b);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    
    if (target === arr[mid]) {
      return mid + 1;
    } else {
      if (target < arr[mid]) {
        end = mid - 1;
      }
      else {
        start = mid + 1;
      }
    }
  }
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));