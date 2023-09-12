function solution(s){  
  let answer = "";

  for (let x of s) {
    if (x >= 'A' && x <= 'Z') answer += x.toLowerCase();
    else if (x >= 'a' && x <= 'z') answer += x.toUpperCase();
  }

  return answer;
}

function solution2(s){  
  let answer="";
  for(let x of s){
      if(x===x.toUpperCase()) answer+=x.toLowerCase();
      else answer+=x.toUpperCase();
  }
  return answer;
}

console.log(solution("StuDY"));