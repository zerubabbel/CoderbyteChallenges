function ABCheck(str) { 
  str = str.toLowerCase();
  // code goes here  
  for(let i = 0; i < str.length; i++){
      if(str[i] === "a"){
        if(str[i + 4] === "b"){
            return true;
        }
      }
  }
  return false;
         
}