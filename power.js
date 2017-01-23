const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);


function power(mtrx,p){
  let total = mtrx;
  for(let a =0; a < p; a++){
    total = Matrix(total.prod(mtrx));

  }
  return total;
}

function betterPower(mtrx,p){
  if(){
    let
    return
  }
  else if(){
    let
    let
    return
  }
  else{
    return mtrx;
  }
}


//testing code
console.log(power(A,10)());
