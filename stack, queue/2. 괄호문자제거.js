function solution(s){  
  let answer = [];
  let stack = [];

  for (let x of s) {
    if (x !== '(' && x !== ')') {
      if (stack.length === 0) answer.push(x);
    }
    else if (x === '(') stack.push('(');
    else stack.splice(stack.length - 1);
  }

  return answer.join('');
}

function solution2(s){  
  let answer;
  let stack=[];
  for(let x of s){
      if(x===')'){
          while(stack.pop()!=='(');
      }
      else stack.push(x);
  }
  answer=stack.join('');
  return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));