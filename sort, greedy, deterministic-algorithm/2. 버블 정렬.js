// 버블 정렬: 서로 인접한 두 원소를 검사해서 정렬 O(n^2)
function solution(arr){
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr.join(' ');
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));