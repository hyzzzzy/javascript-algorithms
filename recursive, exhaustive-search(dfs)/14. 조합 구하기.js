function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let ch = Array.from({ length: n }, () => 0);
  let memo = Array.from(Array(n), () => Array(n).fill(0));

  function DFS(L) {
    if (L === m) {
      const [x, y] = tmp;

      if (memo[x - 1][y - 1] > 0) {
        return;
      }

      if (memo[y - 1][x - 1] === 0) {
        answer.push(tmp.slice());
      }

      memo[x - 1][y - 1] = 1;
      memo[y - 1][x - 1] = 1;
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = i + 1;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer.join('\n');
}

function solution2(n, m) {         
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice()); 
    }
    else{
      for(let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
console.log(solution2(4, 2));