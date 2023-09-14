function solution(s, t) {
  let answer = [];
  s = s.split(t);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (j < Math.ceil(s[i].length / 2)) {
        answer.push(j + 1);
      } else {
        answer.push(s[i].length - j);
      }
    }

    if (i < s.length - 1) answer.push(0);
  }

  return answer.join(' ');
}

function solution2(s, t){
  let answer=[];
  let p=1000;
  for(let x of s){
      if(x===t){
          p=0;
          answer.push(p);
      }
      else{
          p++;
          answer.push(p);
      }
  }
  p=1000;
  for(let i=s.length-1; i>=0; i--){
      if(s[i]===t) p=0;
      else{
          p++;
          answer[i]=Math.min(answer[i], p);
      }
  }
  return answer;
}

let str="teachermode";

console.log(solution(str, 'e'));