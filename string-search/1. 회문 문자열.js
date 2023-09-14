function solution(s) {
  let answer = "YES";
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1].toLowerCase()) {
      return "NO";
    }
  }
  return answer;
}

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split('').reverse().join('') !== s) return "NO";    
  return answer;
}

let str="goooG";
console.log(solution(str));