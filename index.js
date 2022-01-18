// Task 1

// Declare three variables, a and b and c.
let a, b, c;

// If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
a = 3;
b = 5;

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

let output = "";
output += "let a = 3\n";
output += "let b = 5\n";
output += "let c = undefined\n";
output += "------------------\n";
output += "a + b = " + (a + b) + "\n";
output += "a - b = " + (a - b) + "\n";
output += "a * b = " + a * b + "\n";
output += "a / b = " + a / b + "\n";
output += "a % b = " + (a % b) + "\n";
output += "a += b = " + (a += b) + "\n";
output += "a -= b = " + (a -= b) + "\n";
output += "a *= b = " + (a *= b) + "\n";
output += "a /= b = " + (a /= b) + "\n";
output += "a %= b = " + (a %= b) + "\n";
output += "a == b = " + (a == b) + "\n";
output += "a != b = " + (a != b) + "\n";
output += "a > b = " + (a > b) + "\n";
output += "a < b = " + (a < b) + "\n";
output += "!a && !c = " + (!a && !c) + "\n";
output += "!a || !c = " + (!a || !c) + "\n";

alert(output);

//Task 2

//Declare the variable first_name and assign it with the value of your first name;
let first_name = "Xiao Lin";

//Declare the variable last_name and assign it with the value of your last name;
let last_name = "Lau";

//Declare the variable email and assign it with the value of your email;
let email = "lau00070@algonquinlive.com";

//Declare the variable output
output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

//Alert output
alert(output);
