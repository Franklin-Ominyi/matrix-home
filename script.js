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


document.querySelector('#clearBtn2').addEventListener('click', clearInputField2)
document.querySelector('#submitBtn2').addEventListener('click', myFuncTwoByTwo)
document.querySelector('#clearBtn').addEventListener('click', clearInputField)
document.querySelector('#submitBtn').addEventListener('click', myFunc)