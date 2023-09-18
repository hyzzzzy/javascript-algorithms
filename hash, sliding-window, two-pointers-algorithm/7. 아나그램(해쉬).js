// 시간 복잡도: O(n log n)
function solution(str1, str2){
  let answer = "YES";

  if (str1.split('').sort().join('') !== str2.split('').sort().join('')) {
    return "NO";
  }

  return answer;
}

function setHashMap(str, sH) {
  for (let x of str) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
}

// 시간 복잡도: O(n)
function solution2(str1, str2) {
  let answer = "YES";
  let sH1 = new Map();
  let sH2 = new Map();

  setHashMap(str1, sH1);
  setHashMap(str2, sH2);

  for (let [key, value] of sH1) {
    if (!sH2.hax(key) || sH2.get(key) !== value) return "NO";
  }

  return answer;
}

// 시간 복잡도: O(n)
function solution3(str1, str2){
  let answer="YES"; 
  let sH = new Map();
  for(let x of str1){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  for(let x of str2){
      if(!sH.has(x) || sH.get(x)==0) return "NO";
      sH.set(x, sH.get(x)-1);
  }
  return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution2(a, b));
console.log(solution2('abaCC', 'Caaab'));