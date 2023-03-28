// // A variable is a container used in storing Data.
// // it sub-divided into two Step;
// // declaration(var,let,cons)
// // assignment(= assignment operator)

// let age = 20;
// // or
// // age = 20;
// console.log(age);
// // number literal

// let firstName = "Abdulsalam";
// console.log(firstName);
// // string literal

// let student = true;
// console.log(student);
// // Boolean literal


// // arithmetic expression is a combination of operators.a
// // operator are(*,+,-,%,/,++,--)else.t.c.

// let students = 30;
// students = students + 10;

// console.log(students);

// var x = 10;
// var y = 50;
// var z = x + y;
// console.log(z);
// // ADDITION OPERATORS

// let developers = 30;
// developers = developers - 10;

// console.log(developers);
// // SUBTRACTION OPERATORS

// let security = 100;
// security = security * 100;
// // MULTIPLICATION LITERAL

// let president = 10;
// president = president / 2;

// console.log(president);
// DIVISION LITERAL


// console.log(security);
// Multiplication literal





    
// let result = 1+10*(20);
// console.log(result);

// let name = window.alert("No network")

// let username;
// document.getElementById("myButton").onclick = function(){

//     username = document.getElementById("myText").value;
//     console.log(username);
// }

let count = 0;
document.getElementById("increasebtn").onclick = function(){
    count++;
    document.getElementById("counter-label").innerHTML = count;
}
document.getElementById("decreasebtn").onclick = function(){
    count--;
    document.getElementById("counter-label").innerHTML = count;
}
document.getElementById("resetbtn").onclick = function(){
    count=0;
    document.getElementById("counter-label").innerHTML = count;
}
// console.log(count);









