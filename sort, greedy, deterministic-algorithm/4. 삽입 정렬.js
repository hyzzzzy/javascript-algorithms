/* 삽입 정렬: 두 번째 원소부터 시작하여 
* 그 앞의 원소들과 비교하여 삽입할 위치를 지정한 후, 
* 원소를 뒤로 옮기고 지정된 자리에 자료를 삽입하여 정렬
* 최단: O(n), 최악: O(n^2) (역순인 경우)
*/
function solution(arr){
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }

  return arr.join(' ');
}

function solution2(arr){
  let answer=[];
  answer.push(arr[0]);
  for(let i=1; i<arr.length; i++){
      for(let j=0; j<answer.length; j++){
          if(arr[i]<answer[j]){
              answer.splice(j, 0, arr[i]);
              break;
          } 
      }
  }
  return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));