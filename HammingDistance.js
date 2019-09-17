function HammingDistance(strArr) { 
  let count = 0;
  let word1 = strArr[0];
  let word2 = strArr[1];
  
  
  for(let i = 0; i < word1.length; i++){
      if(word1[i] !== word2[i]){
          count++;
      }
  }
  // code goes here  
  return count;
         
}
   
// keep this function call here 
HammingDistance(readline());