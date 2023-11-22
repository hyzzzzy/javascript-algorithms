function solution(n) {
  let answer = 1;

  function DFS(L) {
    if (L === 1) {
      return 1;
    } else {
      return DFS(L - 1) * L;
    }
  }

  answer = DFS(n);
  return answer;
}

let num = 5;
console.log(solution(num));