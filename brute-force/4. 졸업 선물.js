function solution(m, product) {
  let answer = [];
  let n = product.length;
  
  product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  
  for (let i = 0; i < n; i++) {
    let count = 1;
    let sum = product[i][0] / 2 + product[i][1];
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        let price = product[j][0];
        let dilivery = product[j][1];

        if (sum + price + dilivery <= m) {
          sum += price + dilivery;
          count++;
        }
      }
    }
    answer.push(count);
  }

  return Math.max(...answer);
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr)); // 답: 4
console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); // 답 : 5
console.log(solution(41, [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]])); // 답 : 5
console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]])); // 답 : 3