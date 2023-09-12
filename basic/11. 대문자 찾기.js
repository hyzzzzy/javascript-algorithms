function solution(s){         
  let answer = 0;

  for (let x of s) {
    if (x >= 'A' && x <= 'Z') {
      answer++;
    }
  }

  return answer;
}

function solution2(s){         
  let answer=0;
  for(let x of s){
      //let num=x.charCodeAt();
      //대문자 65 ~ 90
      //소문자 97 ~ 122
      //if(num>=65 && num<=90) answer++;
      if(x===x.toUpperCase()) answer++; 
  }

  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));