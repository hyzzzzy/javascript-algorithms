function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  
  function DFS(L, sum) {
    // 합이 기준값보다 큰 경우
    // 이미 구해진 answer 보다 L(깊이, count)가 크거나 같은 경우
    // 더 연산하지 않고 return
    if (sum > m || L >= answer) {
      return;
    }

    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]); // i에 있는 동전을 사용해서 더함
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));