/**
 *      1
 *   2      3         
 * 4  5   6   7
 * 전위순회 출력 : 1 2 4 5 3 6 7
 * 중위순회 출력 : 4 2 5 1 6 3 7
 * 후위순회 출력 : 4 5 2 6 7 3 1
 */

// 전위
function solution(n) {
  let answer = [];
  function DFS(n) {
    if (n > 7) return;
    else {
      answer.push(n);
      DFS(2*n);
      DFS(2*n + 1);
    }
  }
  DFS(n);
  return answer.join(' ');
}

// 후위
function solution2(n) {
  let answer = [];
  function DFS(n) {
    if (n > 7) return;
    else {
      DFS(2*n);
      DFS(2*n + 1);
      answer.push(n);
    }
  }
  DFS(n);
  return answer.join(' ');
}

console.log(solution(1)); // 1 2 4 5 3 6 7
console.log(solution2(1)); // 4 5 2 6 7 3 1