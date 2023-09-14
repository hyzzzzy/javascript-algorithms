function solution(str) {
  str = str.replace(/[^0-9]/g, '');
  return Number(str);
}

function solution2(str) {
  let answer = "";
  // let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer += x;
    // if (!isNaN(x)) answer = answer * 10 + Number(x); 
  }  
  return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));