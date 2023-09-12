function solution(s){  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        s.splice(j, 1);
      }
    }
  }

  return s.join('\n');
}

function solution2(s) {  
  let answer;
  answer = s.filter((v, i) => s.indexOf(v) === i);
  return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution1(str));