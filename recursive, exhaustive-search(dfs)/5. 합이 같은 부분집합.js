function solution(arr) {
  let answer = 'NO';
  let total = arr.reduce((a, b) => a + b, 0);
  let len = arr.length;
  
  // L: 배열의 index, sum: 현재 부분집합의 총 합
  function DFS(L, sum) {
    if (L === len) {
      if (sum === (total - sum)) {
        answer = 'YES';
        return;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));