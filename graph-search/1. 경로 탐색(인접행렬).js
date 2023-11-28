function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1}, () => 0); 
  const path = [];

  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(L) {
    if (L === n) {
      console.log(path)
      answer++;
      return;
    }
    
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0 && graph[L][i] > 0) {
        ch[i] = 1;
        path.push(i);
        DFS(i);
        ch[i] = 0;
        path.pop();
      }
    }
  }

  ch[1] = 1;
  path.push(1);
  DFS(1);
  return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));