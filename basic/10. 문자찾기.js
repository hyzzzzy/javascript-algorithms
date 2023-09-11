function solution(s, t){
  let count = 0;
  for (let str of s) {
    if (str === t) count++;
  }
  return count;
}

function solution2(s, t){
  let answer = s.split(t).length;
  return answer - 1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));