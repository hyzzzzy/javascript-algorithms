function solution(arr) {
  let m = arr.length;
  let n = arr[0].length;
  let answer = 0;

  for (let i = 1; i <= n; i++) { // 1번 학생부터 4번 학생까지 멘토
    for (let j = 1; j <= n; j++) { // 1번 학생부터 4번 학생까지 멘티
      let count = 0;
      for (let k = 0; k < m; k++) { // 테스트 횟수만큼 돌아서
        let pi = pj = 0;
        for (let s = 0; s < n; s++) { // 학생들 탐색
          if (arr[k][s] === i) pi = s; // 현재 배열의 학생들 위치 파악
          if (arr[k][s] === j) pj = s; // 현재 배열의 학생들 위치 파악
        }

        // 멘토 멘티가 될 수 있다면 카운트 증가
        if (pi < pj) count++;
      }
      // 테스트 횟수와 카운트가 같다면 조건 성립
      if (count === m) answer++;
    }
  }

  return answer;
}

let arr=[[3, 4, 1, 2], 
        [4, 3, 2, 1], 
        [3, 1, 4, 2]];
console.log(solution(arr));