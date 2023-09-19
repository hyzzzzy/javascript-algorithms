function solution(times) {
  let answer = 0;
  let n = times.length;
  let tH = new Map();

  for (let i = 0; i < n; i++) {
    let [start, end] = times[i];

    for (let j = start; j < end; j++) {
      if (tH.has(j)) {
        tH.set(j, tH.get(j) + 1);
        answer = Math.max(answer, tH.get(j));
      }
      else tH.set(j, 1);
    }
  }
  return answer;
}

function solution2(times) {
  let answer = 0;
  let count = 0;
  let t_arr = [];

  for (let time of times) {
    let [s, e] = time;
    t_arr.push([s, 0]);
    t_arr.push([e, 1]);
  }
  
  t_arr.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  for (let t of t_arr) {
    let [s, e] = t;
    if (e === 0) count++;
    else count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

function solution3(times){
  let answer=Number.MIN_SAFE_INTEGER;
  let T_line=[];
  for(let x of times){
      T_line.push([x[0], 's']);
      T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b)=>{
      if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
      else return a[0]-b[0];
  });
  let cnt=0;
  for(let x of T_line){
      if(x[1]==='s') cnt++;
      else cnt--;
      answer=Math.max(answer, cnt);
  }
  return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution2(arr));