function solution(arr) {
  let answer = [];
  let count1 = 0, count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let count_row = 0;
    let count_col = 0;

    count1 += arr[i][i];
    count2 += arr[arr.length - i - 1][arr.length - i - 1];
    
    for (let j = 0; j < arr[i].length; j++) {
      count_row += arr[i][j];
      count_col += arr[j][i];
    }
    answer.push(count_row, count_col);
  }

  return Math.max(count1, count2, ...answer);
}

let arr=[[10, 13, 10, 12, 15], 
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
console.log(solution(arr));