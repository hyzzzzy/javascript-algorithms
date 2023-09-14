function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < n; i++) {
    let str = arr[i].toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);  
    }

    if (sum >= max) {
      max = sum;
      answer = Math.max(answer, arr[i]);
    }
  }

  return answer;
}

function solution2(n, arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
      let sum=0, tmp=x;
      // sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
      while(tmp){
          sum+=(tmp%10);
          tmp=Math.floor(tmp/10);
      }
      if(sum>max){
          max=sum;
          answer=x;
      }
      else if(sum===max){
          if(x>answer) answer=x;
      }
  }
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));