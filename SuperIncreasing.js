function Superincreasing(arr) { 
  let sum = 0; 
  
  
  for (let i = 0; i < arr.length; i++){
      if (!(arr[i] >= sum)){
        return false;
      }
      sum+= arr[i];
  }
  // code goes here  
  return true; 
         
}
   
// keep this function call here 
Superincreasing(readline());