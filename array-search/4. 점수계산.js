function solution(arr) {         
  let answer = 0;
  let score = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      score.push(0);
    } else {
      if (score[i - 1] === 0 || i === 0) {
        score.push(1);
      } else {
        score.push(score[i - 1] + 1);
      }
    }
  }

  answer = score.reduce((prev, curr) => prev + curr, 0);
  return answer;
}

function solution2(arr) {         
  let answer=0, cnt=0;
  for(let x of arr){
      if(x===1){
          cnt++;
          answer+=cnt;
      }
      else cnt=0;
  }
     
  return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));