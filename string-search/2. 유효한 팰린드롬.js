function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1] 
      && s[i] >= 'a' && s[i] <= 'z') {
        return "NO";
    }
  }
  return answer;
}

function solution2(s){
  let answer="YES";
  s=s.toLowerCase().replace(/[^a-z]/g, ''); // ^a-z는 a-z를 제외한 나머지 문자들 모두 바꿈
  if(s.split('').reverse().join('')!==s) return "NO";
  return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));