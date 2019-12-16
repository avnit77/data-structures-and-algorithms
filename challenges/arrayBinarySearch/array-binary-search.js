function binarySearch(array, key) {
  let answer;
  for(let i = 0; i < array.length; i++){
    if(key === array[i]){
      answer = i;
    }
  }
  if(answer === undefined) {
    answer = -1;
  }
  return answer;
}

module.exports = { binarySearch };
