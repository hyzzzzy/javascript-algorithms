function solution(k, arr) {
  let answer = 0;
  let lt = 0;
  let n = arr.length;
  let sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];

    while (rt - lt + 1 > k) {
      sum -= arr[lt++];
    }
    
    if (rt - lt + 1 === k) answer = Math.max(answer, sum);
  }

  return answer;
}

// sliding-window
function solution2(k, arr){
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=arr[i];
  answer=sum;
  for(let i=k; i<arr.length; i++){
      sum+=(arr[i]-arr[i-k]);
      answer=Math.max(answer, sum);
  }                    
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));