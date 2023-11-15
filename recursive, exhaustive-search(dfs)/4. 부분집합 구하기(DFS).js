function solution(n) {
  let answer = [];
  let ch = Array.from({length: n + 1}, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = [];

      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          tmp.push(i);
        }
      }

      if (tmp.length > 0) { // 공집합이 아닐 경우에만
        answer.push(tmp.join(' '));
      }
    } else {
      ch[v] = 1;
      DFS(v + 1); // 집합에 포함 시켜서 넘김
      
      ch[v] = 0;
      DFS(v + 1); // 집합에 포함 안시켜서 넘김
    }
  }

  DFS(1);
  return answer.join('\n');
}

console.log(solution(3));