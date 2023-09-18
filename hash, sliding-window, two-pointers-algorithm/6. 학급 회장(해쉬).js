function solution(s){  
  let counts = {};
  let answer = '';

  for (let x of s) counts[x] = (counts[x] || 0) + 1;
  
  let max = 0;
  for (let x in counts) {
    if (counts[x] > max) {
      max = counts[x];
      answer = x;
    }  
  }

  return answer;
}

function solution2(s){  
  let answer;
  let sH = new Map();
  for(let x of s){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));