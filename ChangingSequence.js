function ChangingSequence(arr) { 
  
  let breakPoint;
  let IncreaseFlag;
  let DecreaseFlag; 
  
  if(arr[0] < arr[1]){
      for(let i = 2; i < arr.length; i++){
          if(arr[i] < arr[i - 1]){
            breakPoint = i - 1;
            return breakPoint;
          }
      }
  }
  
  
  if(arr[0] > arr[1]){
    for(let i = 2; i < arr.length; i++){
          if(arr[i] > arr[i - 1]){
            breakPoint = i -1;
            return breakPoint;
          }
      }
  }


  // code goes here  
  return -1;
         
}
   
// keep this function call here 
ChangingSequence(readline());                            
