function solution(need, plan){
  let answer = "YES";
  need = need.split('');
  
  for (let x of plan) {
    if (need[0] === x) {
      need.shift();
      if (need.length === 0) return answer;
    }
  }
  if (need.length !== 0) answer = "NO";

  return answer;
}

function solution2(need, plan){
  let answer="YES";
  let queue=need.split('');
  for(let x of plan){
      if(queue.includes(x)){
          if(x!==queue.shift()) return "NO";
      }
  }
  if(queue.length>0) return "NO";  
  return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));