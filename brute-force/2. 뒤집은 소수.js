function isPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, arr){
  let answer = [];

  for (let i = 0; i < n; i++) {
    let num = Number(arr[i].toString().split('').reverse().join(''));
    
    if (isPrime(num)) answer.push(num);
  }

  return answer.join(' ');
}

function solution2(arr) {
  let answer=[];
  for(let x of arr){
      let res=0;
      while(x){
          let t=x%10;
          res=res*10+t;
          x=parseInt(x/10);
      }
      if(isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(9, arr));