function solution(arr){
  let odd = [];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    }
  }

  let sum = odd.reduce((prev, curr) => prev + curr, 0);
  let min = Math.min(...odd);

  answer.push(sum);
  answer.push(min);

  return answer.join('\n');
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));