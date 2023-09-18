function solution(n, k){
  let prince = new Array(n).fill(0);
  for (let i = 0; i < n; i++) prince[i] = i + 1;
  
  let count = 1;
  let i = 0;
  while (prince.length > 1) {
    if (count === k) {
      prince.splice(i, 1);
      count = 1;
    } else {
      count++;
      i++;
    }
    if (i === prince.length) i = 0;
  }

  return prince[0];
}

function solution2(n, k){
  let answer;
  let queue=Array.from({length:n}, (v, i)=>i+1); 
  while(queue.length){
      for(let i=1; i<k; i++) queue.push(queue.shift());
      queue.shift();
      if(queue.length===1) answer=queue.shift();
  }  
  return answer;
}

console.log(solution(8, 3));