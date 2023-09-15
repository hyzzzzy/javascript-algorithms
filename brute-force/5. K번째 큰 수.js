function solution(n, k, card){
  let answer = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = card[i] + card[j] + card[k];
        if (answer.indexOf(sum) === -1) {
          answer.push(card[i] + card[j] + card[k]);
        }
      }
    }
  }
  
  answer.sort((a, b) => b - a);
  
  if (answer.length >= k - 1) {
    return answer[k - 1];
  } else {
    return -1;
  }
}

function solution2 (n, k, card){
  let answer;
  let tmp = new Set();
  for(let i=0; i<n; i++){
      for(let j=i+1; j<n; j++){
          for(let k=j+1; k<n; k++){
              tmp.add(card[i]+card[j]+card[k]);
          }
      }
  }
  let a=Array.from(tmp).sort((a, b)=>b-a);
  answer=a[k-1];
  return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));