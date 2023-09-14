// function solution(arr) { 
//   let answer = [];
//   let sortedArr = [...arr];
//   sortedArr.sort((a, b) => b - a);

//   for (let x of arr) {
//     let rank = sortedArr.indexOf(x) + 1;
//     answer.push(rank);
//   }
  
//   return answer.join(' ');
// }

function solution(arr) {  
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }             
  return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));