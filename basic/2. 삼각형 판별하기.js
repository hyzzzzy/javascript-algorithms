function solution(a, b, c){
  // 가장 긴 막대가 나머지 막대의 합보다 작아야 함
  let data = [a, b, c].sort();
  
  return data[2] < data[0] + data[1] ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11));