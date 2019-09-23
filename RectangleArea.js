function RectangleArea(strArray){
	let coords = strArray.map((n)=>{
  	let coordinates = n.split(" ");
    
    let x = Number(coordinates[0].substring(1, coordinates[0].length));
    let y = Number(coordinates[1].substring(0, coordinates[1].length - 1));
  
  
  	return [x,y];
  });
  
  
  let points =  coords.shift();
  
  let x = points[0];
  let y = points[1];
  
  let xDiff = 0; 
  let yDiff = 0; 
  
  
  coords.forEach((n)=>{
  	if(n[0] === x){
    	yDiff = Math.abs(n[1] - y);
    }

		if(n[1] === y){
    	xDiff = Math.abs(n[0] - x);
    }
  });
  
  
  let area = xDiff * yDiff; 
  

   return area;   
}