//toggler
var togglerbar = document.getElementById("togglerbar");
var togglemenu = document.getElementById("togglemenu");
togglemenu.style.display = "none";
const toggle =()=>{
 if(togglemenu.style.display == "none"){
  togglemenu.style.display = "block";
  togglerbar.style.color = "red";
 }else{
  togglemenu.style.display = "none";
  togglerbar.style.color = "purple";
 }
}
document.getElementById("togglerbar").addEventListener("click", toggle);

//function for finding the determinant of 3 by 3 matrix
const myFunc=()=>{
 let a11 = document.querySelector('#a11').value;
 let a12 = document.querySelector('#a12').value;
 let a13 = document.querySelector('#a13').value;

 let a21 = document.querySelector('#a21').value;
 let a22 = document.querySelector('#a22').value;
 let a23 = document.querySelector('#a23').value;

 let a31 = document.querySelector('#a31').value;
 let a32 = document.querySelector('#a32').value;
 let a33 = document.querySelector('#a33').value;

 var a11_Done = a11 * ((a22 * a33)-(a23*a32));
 var a12_Done = a12 * ((a21 * a33)-(a23*a31));
 var a13_Done = a13 * ((a21 * a32)-(a22*a31));

 var answer = a11_Done - a12_Done + a13_Done;
 
 document.getElementById("ans").innerHTML = "ANSWER: " + answer;
}

//function for clearing the input of the 3 by 3 matrix
const clearInputField=()=>{
 document.querySelector('#a11').value = "";
 document.querySelector('#a12').value = "";
 document.querySelector('#a13').value = "";

 document.querySelector('#a21').value = "";
 document.querySelector('#a22').value = "";
 document.querySelector('#a23').value = "";

 document.querySelector('#a31').value = "";
 document.querySelector('#a32').value = "";
 document.querySelector('#a33').value = "";
 document.getElementById("ans").innerHTML = '';

}

const myFuncTwoByTwo=()=>{
 let a11 = document.querySelector('#ba11').value;
 let a12 = document.querySelector('#ba12').value;

 let a21 = document.querySelector('#ba21').value;
 let a22 = document.querySelector('#ba22').value;

 let a11_done = a11 * a22;
 let a22_done = a12 * a21;

 let answer = a11_done - a22_done;
 document.getElementById("ans2").innerHTML = "ANSWER: " + answer;
}

const clearInputField2=()=>{
 document.querySelector('#ba11').value = "";
 document.querySelector('#ba12').value = "";
 
 document.querySelector('#ba21').value = "";
 document.querySelector('#ba22').value = "";
 document.getElementById("ans2").innerHTML = '';
}

//almighty formula
const myFunctionQuad=()=>{
 let a = document.querySelector('#a').value;
 let b = document.querySelector('#b').value;
 let c = document.querySelector('#c').value;

 let bSquare = b * b;
 let otherPart = 4*a*c;
 let top = bSquare - otherPart;
 let topSquared = Math.sqrt(top)
 let ansOne = -b + topSquared;
 let ansTwo = (-b) - topSquared;
 let fullAnsOne = ansOne/ (2*a);
 let fullAnsTwo = ansTwo/ (2*a);

 let answer = fullAnsOne + ' or  ' + fullAnsTwo;

 document.getElementById("ans3").innerHTML = "ANSWER: " + answer;
}

const clearInputField3=()=>{
 document.querySelector('#a').value = "";
 document.querySelector('#b').value = "";
 document.querySelector('#c').value = "";
 document.getElementById("ans3").innerHTML = '';
}

//Simultaneous Equation
const myFunctionSimu=()=>{
 let Ax = document.querySelector('#simuAx').value;
 let Ay = document.querySelector('#simuAy').value;
 let Ac = document.querySelector('#simuAc').value;

 let Bx = document.querySelector('#simuBx').value;
 let By = document.querySelector('#simuBy').value;
 let Bc = document.querySelector('#simuBc').value;

 let firstX = Ax * By;
 let secondX = (-Bx)*(Ay);
 let mainNo = Ac * By;
 let number = Bc * Ay;
 let top = mainNo - number;
 let down = firstX + secondX;
 let x = top/down;

 //www
 let yTop = Ac;
 let ySubtract = Ax * x;
 let yEquation = (yTop - (ySubtract));
 let y = yEquation/Ay;
 document.getElementById('ansSimu').innerHTML = "x: " + x + " y: " + y ;
}

const clearInputFieldSimu=()=>{
 document.querySelector('#simuAx').value = "";
 document.querySelector('#simuAy').value = "";
 document.querySelector('#simuAc').value = "";

 document.querySelector('#simuBx').value = "";
 document.querySelector('#simuBy').value = "";
 document.querySelector('#simuBc').value = "";
 
 document.getElementById("ansSimu").innerHTML = '';
}


document.querySelector('#clearBtnSimu').addEventListener('click', clearInputFieldSimu)
document.querySelector('#submitBtnSimu').addEventListener('click', myFunctionSimu)
document.querySelector('#clearBtn3').addEventListener('click', clearInputField3)
document.querySelector('#submitBtn3').addEventListener('click', myFunctionQuad)
document.querySelector('#clearBtn2').addEventListener('click', clearInputField2)
document.querySelector('#submitBtn2').addEventListener('click', myFuncTwoByTwo)
document.querySelector('#clearBtn').addEventListener('click', clearInputField)
document.querySelector('#submitBtn').addEventListener('click', myFunc)