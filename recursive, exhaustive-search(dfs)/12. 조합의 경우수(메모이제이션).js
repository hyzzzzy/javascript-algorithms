function solution(n, r) {         
  let answer = 0;
  // ex. 32 C 18 에 대해 dy[32][18] 에 미리 메모이제이션 할 배열
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  function DFS(a, b) {
    if (dy[a][b] > 0) {
      return dy[a][b];
    }

    if (a === b || b === 0) {
      return 1;
    } else {
      return dy[a][b] = DFS(a - 1, b - 1) + DFS(a - 1, b);
    }
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200