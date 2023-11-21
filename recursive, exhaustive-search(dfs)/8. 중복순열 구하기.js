function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // 순열을 담을 배열

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  answer.push(answer.length);

  return answer.join('\n');
}

console.log(solution(3, 2));