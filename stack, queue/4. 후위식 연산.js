function calc(op, num1, num2) {
  if (op === '+') return num1 + num2;
  else if (op === '-') return num1 - num2;
  else if (op === '*') return num1 * num2;
  else if (op === '/') return num1 / num2;
}

function solution(s){  
  let answer = 0;
  let stack = [];
  
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let num2 = stack.pop();
      let num1 = stack.pop();
      answer = calc(x, num1, num2);
      stack.push(answer);
    } 
  }
  answer = stack[0];
  return answer;
}

let str="352+*9-";
console.log(solution(str));