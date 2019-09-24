function ExOh(str) { 

  str = str.toLowerCase();
  let xCount = 0; 
  let oCount = 0; 
  
  for(var i = 0; i < str.length; i++){
      if(str[i] === "o"){
        oCount++;
      } else if
      
      (str[i] === "x"){
          xCount++
      }
      
    
  }
  // code goes here  

           if(xCount === oCount){
          return true; 
      } else{
          return false;
      }
}