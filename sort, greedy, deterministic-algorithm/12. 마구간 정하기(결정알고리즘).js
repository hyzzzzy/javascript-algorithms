function count(mid, stable) {
  let ep = stable[0];
  let count = 1;

  for (let x of stable) {
    if (ep !== x && mid <= x - ep) {
      count++;
      ep = x;
    }
  }
  return count;
}

function solution(c, stable){
  let answer = 0;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let cnt = count(mid, stable);

    if (cnt >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr)); // 3