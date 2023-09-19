function solution(arr){
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr.join(' ');
}

function solution2(arr){
  let answer=[];
  for(let x of arr){
      if(x<0) answer.push(x);
  }
  for(let x of arr){
      if(x>0) answer.push(x);
  }
  return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));