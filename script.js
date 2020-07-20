//toggler
var togglerbar = document.getElementById("togglerbar");
var togglemenu = document.getElementById("togglemenu");

togglemenu.style.display = "none";

function toggle (e){
 e.preventDefault();
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
function myFunc(e){
 e.preventDefault();
 var a11 = document.querySelector('#a11').value;
 var a12 = document.querySelector('#a12').value;
 var a13 = document.querySelector('#a13').value;

 var a21 = document.querySelector('#a21').value;
 var a22 = document.querySelector('#a22').value;
 var a23 = document.querySelector('#a23').value;

 var a31 = document.querySelector('#a31').value;
 var a32 = document.querySelector('#a32').value;
 var a33 = document.querySelector('#a33').value;

 var a11_Done = a11 * ((a22 * a33)-(a23*a32));
 var a12_Done = a12 * ((a21 * a33)-(a23*a31));
 var a13_Done = a13 * ((a21 * a32)-(a22*a31));

 var answer = a11_Done - a12_Done + a13_Done;
 
 document.getElementById("ans").innerHTML = "ANSWER: " + answer;
}

//function for clearing the input of the 3 by 3 matrix
function clearInputField(e){
 e.preventDefault();
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

function myFuncTwoByTwo(e){
 e.preventDefault();
 var a11 = document.querySelector('#ba11').value;
 var a12 = document.querySelector('#ba12').value;

 var a21 = document.querySelector('#ba21').value;
 var a22 = document.querySelector('#ba22').value;

 var a11_done = a11 * a22;
 var a22_done = a12 * a21;

 var answer = a11_done - a22_done;
 document.getElementById("ans2").innerHTML = "ANSWER: " + answer;
}

function clearInputField2(e){
 e.preventDefault();
 document.querySelector('#ba11').value = "";
 document.querySelector('#ba12').value = "";
 
 document.querySelector('#ba21').value = "";
 document.querySelector('#ba22').value = "";
 document.getElementById("ans2").innerHTML = '';
}

//almighty formula
function myFunctionQuad(e){
 e.preventDefault();
 var a = document.querySelector('#a').value;
 var b = document.querySelector('#b').value;
 var c = document.querySelector('#c').value;

 var bSquare = b * b;
 var otherPart = 4*a*c;
 var top = bSquare - otherPart;
 var topSquared = Math.sqrt(top)
 var ansOne = -b + topSquared;
 var ansTwo = (-b) - topSquared;
 var fullAnsOne = ansOne/ (2*a);
 var fullAnsTwo = ansTwo/ (2*a);

 var answer = fullAnsOne + ' or  ' + fullAnsTwo;

 document.getElementById("ans3").innerHTML = "ANSWER: " + answer;
}

function clearInputField3(e){
 e.preventDefault();
 document.querySelector('#a').value = "";
 document.querySelector('#b').value = "";
 document.querySelector('#c').value = "";
 document.getElementById("ans3").innerHTML = '';
}



//sum and product of roots
function myFunctionSumAndProduct(e){
 e.preventDefault();
 var a = document.querySelector('#aR').value;
 var b = document.querySelector('#bR').value;
 var c = document.querySelector('#cR').value;

 var sum = (b / a) * -1;
 var product = c/a;
 var answer = `Sum: ${sum}, Product: ${product}`;

 document.getElementById("ans3R").innerHTML = "ANSWER: " + answer;
}

function clearInputFieldSumAndProduct(e){
 e.preventDefault();
 document.querySelector('#aR').value = "";
 document.querySelector('#bR').value = "";
 document.querySelector('#cR').value = "";
 document.getElementById("ans3R").innerHTML = '';
}


//formulation of quadration equation from roots
function myFunctionRootFormulation(e){
 e.preventDefault();
 var a = document.querySelector('#aRF').value;
 var b = document.querySelector('#bRF').value;

 var  sum= (parseFloat(a) + parseFloat(b)) * -1;
 var product = (a * b);

 var prefix;
 var suffix;
 
 if(sum > 0){
  prefix = "+";
 }else{
  prefix = ''
 }

 if(product > 0){
  suffix = '+'
 }else{
  suffix = ''
 }
 
 var answer= `${prefix} ${sum} ${suffix} ${product} = 0`

 document.getElementById('ans3RF').style.display = 'block';
 document.getElementById('ans3RF2').innerHTML = answer;
}

function clearInputFieldRootFormulation(e){
 e.preventDefault();
 document.querySelector('#aRF').value = "";
 document.querySelector('#bRF').value = "";
 document.getElementById("ans3RF").style.display = 'none';
}


//Simultaneous Equation
function myFunctionSimu(e){
 e.preventDefault();
 var Ax = document.querySelector('#simuAx').value;
 var Ay = document.querySelector('#simuAy').value;
 var Ac = document.querySelector('#simuAc').value;

 var Bx = document.querySelector('#simuBx').value;
 var By = document.querySelector('#simuBy').value;
 var Bc = document.querySelector('#simuBc').value;

 var firstX = Ax * By;
 var secondX = (-Bx)*(Ay);
 var mainNo = Ac * By;
 var number = Bc * Ay;
 var top = mainNo - number;
 var down = firstX + secondX;
 var x = top/down;

 //For the value of Y
 var yTop = Ac;
 var ySubtract = Ax * x;
 var yEquation = (yTop - (ySubtract));
 var y = yEquation/Ay;
 document.getElementById('ansSimu').innerHTML = "x: " + x + " y: " + y ;
}

function clearInputFieldSimu(e){
 e.preventDefault();
 document.querySelector('#simuAx').value = "";
 document.querySelector('#simuAy').value = "";
 document.querySelector('#simuAc').value = "";

 document.querySelector('#simuBx').value = "";
 document.querySelector('#simuBy').value = "";
 document.querySelector('#simuBc').value = "";
 
 document.getElementById("ansSimu").innerHTML = '';
}


function myFunctionMatrixEquation(e){
 e.preventDefault();
 var aa = document.querySelector('#a11E').value;
 var ab = document.querySelector('#a12E').value;
 var ac = document.querySelector('#a13E').value;
 var ak = document.querySelector('#ak').value;

 var ba = document.querySelector('#a21E').value;
 var bb = document.querySelector('#a22E').value;
 var bc = document.querySelector('#a23E').value;
 var bk = document.querySelector('#bk').value;

 var ca = document.querySelector('#a31E').value;
 var cb = document.querySelector('#a32E').value;
 var cc = document.querySelector('#a33E').value;
 var ck = document.querySelector('#ck').value;

 var a11 = (bb * cc) - (bc * cb);
 var a12 = ((ba * cc) - (ca * bc)) * -1;
 var a13 = (ba * cb) - (bb * ca);

 var a21 = ((ab * cc) - (cb * ac)) * -1;
 var a22 = (aa * cc) - (ca * ac);
 var a23 = ((aa * cb) - (ca * ab)) * -1;

 var a31 = (ab * bc) - (bb * ac);
 var a32 = ((aa * bc) - (ba * ac)) * -1;
 var a33 = (aa * bb) - (ba * ab);
 var determinant = (aa * a11) + (ab * a12) + (ac * a13);

 var firstRow = (a11 * ak) + (a21 * bk) + (a31 * ck);
 var secondRow = (a12 * ak) + (a22 * bk) + (a32 * ck);
 var thirdRow = (a13 * ak) + (a23 * bk) + (a33 * ck);
 var x = firstRow/ determinant;
 var y = secondRow/ determinant;
 var z = thirdRow/ determinant;
 

 // var answer = a11_Done - a12_Done + a13_Done;
 // console.log(a11, a12, a13, a21, a22, a23, a31, a32,a33)
 var answer = `x: ${x}, y: ${y}, z: ${z}`
 document.getElementById("ansE").innerHTML = "ANSWER: " + answer;
}



function clearInputFieldMatrixEquation(e){
 e.preventDefault();
 document.querySelector('#a11E').value = "";
 document.querySelector('#a12E').value = "";
 document.querySelector('#a13E').value = "";
 document.querySelector('#ak').value = "";

 document.querySelector('#a21E').value = "";
 document.querySelector('#a22E').value = "";
 document.querySelector('#a23E').value = "";
 document.querySelector('#bk').value = "";

 document.querySelector('#a31E').value = "";
 document.querySelector('#a32E').value = "";
 document.querySelector('#a33E').value = "";
 document.querySelector('#ck').value = "";

 document.getElementById("ansE").innerHTML = '';

}

function myFunctionMatrixEquation2(e){
 e.preventDefault();
 var aa = document.querySelector('#a11E2').value;
 var ab = document.querySelector('#a12E2').value;
 var ak = document.querySelector('#ak2').value;

 var ba = document.querySelector('#a21E2').value;
 var bb = document.querySelector('#a22E2').value;
 var bk = document.querySelector('#bk2').value;

 var determinant = (aa * bb) - (ba * ab);

 var firstRow = (bb * ak) + ((-1 * ab) * (bk));
 var secondRow = ((ba * -1) * (ak)) + (aa * bk);

 var x = firstRow/ determinant;
 var y = secondRow/ determinant;
 
 var answer = `x: ${x}, y: ${y}`
 document.getElementById("ansE2").innerHTML = "ANSWER: " + answer;
}

function clearInputFieldMatrixEquation2(e){
 e.preventDefault();
 document.querySelector('#a11E2').value = "";
 document.querySelector('#a12E2').value = "";
 document.querySelector('#ak2').value = "";

 document.querySelector('#a21E2').value = "";
 document.querySelector('#a22E2').value = "";
 document.querySelector('#bk2').value = "";

 document.getElementById("ansE2").innerHTML = '';

}

document.querySelector('#clearBtn3RF').addEventListener('click', clearInputFieldRootFormulation)
document.querySelector('#submitBtn3RF').addEventListener('click', myFunctionRootFormulation)

document.querySelector('#clearBtn3R').addEventListener('click', clearInputFieldSumAndProduct)
document.querySelector('#submitBtn3R').addEventListener('click', myFunctionSumAndProduct)

document.querySelector('#clearBtnE2').addEventListener('click', clearInputFieldMatrixEquation2)
document.querySelector('#submitBtnE2').addEventListener('click', myFunctionMatrixEquation2)

document.querySelector('#clearBtnE').addEventListener('click', clearInputFieldMatrixEquation)
document.querySelector('#submitBtnE').addEventListener('click', myFunctionMatrixEquation)

document.querySelector('#clearBtnSimu').addEventListener('click', clearInputFieldSimu)
document.querySelector('#submitBtnSimu').addEventListener('click', myFunctionSimu)

document.querySelector('#clearBtn3').addEventListener('click', clearInputField3)
document.querySelector('#submitBtn3').addEventListener('click', myFunctionQuad)

document.querySelector('#clearBtn2').addEventListener('click', clearInputField2)
document.querySelector('#submitBtn2').addEventListener('click', myFuncTwoByTwo)

document.querySelector('#clearBtn').addEventListener('click', clearInputField)
document.querySelector('#submitBtn').addEventListener('click', myFunc)