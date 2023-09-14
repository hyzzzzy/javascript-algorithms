function solution(s){
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      answer += count > 1 ? `${s[i]}${count}` : `${s[i]}`;
      count = 1;
    } else {
      count++;
    }
  }

  return answer;
}

function solution2(s){
  let answer="";
  let cnt=1;
  s=s+" "; // 마지막 문자열 비교를 위해 공백문자 추가
  for(let i=0; i<s.length-1; i++){
      if(s[i]===s[i+1]) cnt++;
      else{
          answer+=s[i];
          if(cnt>1) answer+=String(cnt);
          cnt=1;
      }
  }
  return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));