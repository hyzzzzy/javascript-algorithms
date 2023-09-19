function solution(size, arr){
  let answer = Array.from({length: size}, v => v = 0);
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (answer.indexOf(arr[i]) === -1) {
      answer.pop();
      answer.unshift(arr[i]);
    } else {
      let j = answer.indexOf(arr[i]) - 1;
      while (j >= 0) {
        answer[j + 1] = answer[j--];
      }
      answer[j + 1] = arr[i];
    }
  }
  return answer.join(' ');
}

function solution2(size, arr){
  let answer=Array.from({length:size}, ()=>0);
  arr.forEach(x => {
      let pos=-1;
      for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
          for(let i=size-1; i>=1; i--){
              answer[i]=answer[i-1];
          }
      }
      else{
          for(let i=pos; i>=1; i--){
              answer[i]=answer[i-1];
          }
      } 
      answer[0]=x;  
  });

  return answer;
}

function solution3(size, arr){
  let answer=[];
  arr.forEach(x => {
      let pos=-1;
      for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
         answer.unshift(x);
         if(answer.length>size) answer.pop();
      }
      else{
         answer.splice(pos, 1);
         answer.unshift(x);
      } 
     
  });

  return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));