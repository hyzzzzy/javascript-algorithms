function solution(s){
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === ')') answer++;
      else answer += stack.length;
    }
  }

  return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a)); // 17
console.log(solution('(((()(()()))(())()))(()())')); // 24