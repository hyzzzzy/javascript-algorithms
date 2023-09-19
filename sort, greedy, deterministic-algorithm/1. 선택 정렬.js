// 선택 정렬: 최솟값을 찾아서 정렬 O(n^2)
function solution(arr){
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[index] > arr[j]) index = j;
    }

    if (i !== index) [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr.join(' ');
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));