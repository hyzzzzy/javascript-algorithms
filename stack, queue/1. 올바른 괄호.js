function solution(s){
  let stack = [];

  for (let x of s) {
    if (x === '(') stack.push(x);
    else if (x === ')' && stack.length === 0) return 'NO';
    else stack.splice(stack.length - 1);
  }

  return stack.length === 0 ? "YES" : "NO";
}

function solution2(s){
  let answer="YES";
  stack=[];
  for(let x of s){
      if(x==='(') stack.push(x);
      else{
          if(stack.length===0) return "NO";
          stack.pop();
      }
  }
  if(stack.length>0) return "NO";  
  return answer;
}

let a="(()(()))(()";
console.log(solution(a));