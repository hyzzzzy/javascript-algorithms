function solution(s){  
  let answer = '';

  for (let x of s) {
    if (x.length > answer.length) {
      answer = x;
    }
  }

  return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));