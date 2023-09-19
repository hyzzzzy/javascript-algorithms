function solution(meeting){
  let n = meeting.length;
  let answer = 1;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  
  let end = meeting[0][1];
  for (let i = 1; i < n; i++) {
    if (end <= meeting[i][0]) {
      answer++;
      end = meeting[i][1]; 
    }
  }

  return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr)); // 3
console.log(solution([[3, 3], [1, 3], [2, 3]])); // 2