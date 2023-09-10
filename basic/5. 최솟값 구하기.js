function solution(arr){         
  return Math.min(...arr);
}

function solution2(arr){         
  let answer, min=Number.MAX_SAFE_INTEGER; // 안정적인 최대 정수를 저장
  for(let i=0; i<arr.length; i++){
      if(arr[i]<min) min=arr[i];
  }
  answer=min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));