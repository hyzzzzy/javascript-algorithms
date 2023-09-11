function solution(day, arr){
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === day) {
      count++;
    }
  }

  return count;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));