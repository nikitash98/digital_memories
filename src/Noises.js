function computeCurl(x, y, z){
    var eps = 0.0001;
  
    x += 1000.0*offset;
    y -= 1000.0*offset;
  
    var curl = new THREE.Vector3();
  
    //Find rate of change in YZ plane
    var n1 = fbm(x, y + eps, z); 
    var n2 = fbm(x, y - eps, z); 
    //Average to find approximate derivative
    var a = (n1 - n2)/(2 * eps);
    var n1 = fbm(x, y, z + eps); 
    var n2 = fbm(x, y, z - eps); 
    //Average to find approximate derivative
    var b = (n1 - n2)/(2 * eps);
    curl.x = a - b;
  
    //Find rate of change in ZX plane
    n1 = fbm(x, y, z + eps); 
    n2 = fbm(x, y, z - eps); 
    //Average to find approximate derivative
    a = (n1 - n2)/(2 * eps);
    n1 = fbm(x + eps, y, z); 
    n2 = fbm(x - eps, y, z); 
    //Average to find approximate derivative
    b = (n1 - n2)/(2 * eps);
    curl.y = a - b;
  
    //Find rate of change in XY plane
    n1 = noise.simplex3(x + eps, y, z); 
    n2 = noise.simplex3(x - eps, y, z); 
    //Average to find approximate derivative
    a = (n1 - n2)/(2 * eps);
    n1 = noise.simplex3(x, y + eps, z); 
    n2 = noise.simplex3(x, y - eps, z); 
    //Average to find approximate derivative
    b = (n1 - n2)/(2 * eps);
    curl.z = a - b;
  
    return curl;
  }
  