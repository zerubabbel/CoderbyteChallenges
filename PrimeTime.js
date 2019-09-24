function PrimeTime(num) { 
  
  for (let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
     
  }

  // code goes here  
   return true;
         
}
   