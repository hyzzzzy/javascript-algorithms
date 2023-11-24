function solution(n, f) {
  let answer = [];
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 조합을 저장하는 배열 
  let ch = Array.from({ length: n + 1 }, () => 0); // 순열을 만들어 내기 위한 체크 배열
  let p = Array.from({ length: n }, () => 0); // 순열을 저장할 배열
  let b = Array.from({ length: n }, () => 0); // 곱해야할 조합값 미리 구함 ex) if (n === 4) [3C0, 3C1, 3C2, 3C3]

  function combi(a, b) {
    if (dy[a][b] > 0) return dy[a][b];
    if (a === b || b === 0) return 1; 
    else return dy[a][b] = combi(a - 1, b - 1) + combi(a - 1, b);
  }

  function DFS(L, sum) {
    if (flag) return;

    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + (b[L] * p[L]));
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16)); // 3 1 2 4