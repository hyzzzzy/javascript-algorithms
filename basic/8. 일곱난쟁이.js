function solution(arr) {
  let total = arr.reduce((prev, curr) => prev + curr, 0);
  let target = total - 100;
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr.join(' ');
      }
    }
  }
}

let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));