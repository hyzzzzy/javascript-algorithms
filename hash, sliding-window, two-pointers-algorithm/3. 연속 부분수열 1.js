function solution(m, arr){
  let answer = 0;
  let n = arr.length;
  let pos1 = 0;

  while (pos1 < n) {
    let sum = arr[pos1];
    let pos2 = pos1 + 1;
    while (sum < m && pos2 < n) {
      sum += arr[pos2++];
    }
    if (sum === m) answer++;
    pos1++;
  }

  return answer;
}

function solution2(m, arr){
  let answer=0, lt=0, sum=0;
  for(let rt=0; rt<arr.length; rt++){
      sum+=arr[rt];
      if(sum===m) answer++;
      while(sum>=m){
          sum-=arr[lt++];
          if(sum===m) answer++;       
      }
  }        
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));