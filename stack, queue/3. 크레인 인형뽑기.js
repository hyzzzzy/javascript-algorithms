function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      let item = board[i][x - 1];
      if (item !== 0) {
        if (stack[stack.length - 1] === item) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(item);
        }
        board[i][x - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

let a=[[0,0,0,0,0],
     [0,0,1,0,3],
     [0,2,5,0,1],
     [4,2,4,4,2],
     [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));