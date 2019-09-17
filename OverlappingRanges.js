function OverlappingRanges(arr) { 
  
  
  
  let countNumber = arr.pop();
  
  let count = 0;
  
  for(let i = arr[0]; i <= arr[1]; i++){
      if(i >= arr[2] && i <= arr[3]){
        count++;
      }
  }
  
  if(count >= countNumber){
      return true; 
  } else{
      return false;
  }


         
}
   
// keep this function call here 
OverlappingRanges(readline());