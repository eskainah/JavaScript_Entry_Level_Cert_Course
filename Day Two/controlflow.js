/**
 * Simple if statement
 */
/* let hour = 13;
let greetings;

if (hour<18){
    greetings = "Good Day";

    document.write(greetings);
}
 */

/**
 * Simple if/else statement
 */
/* let hour = 20;
let greetings;

if (hour<18){
    greetings = "Good Day";

    document.write(greetings);
}
else
{
    greetings="Good Evening";

    document.write(greetings)
} */

/**
 * Simple if/elseif/else statement
 */
/* let hour = 6;
let greetings;

if (hour<10){
    greetings = "Good morning";

    document.write(greetings);
}
else if(hour < 20)
{
    greetings="Good Day";

    document.write(greetings)
}
else{
    
    greetings="Good Evening";

    document.write(greetings)
}
 */

/**
 * Logical Operators 
 **/
/* let hour = 9
if (hour < 10 || hour > 18){
    document.write("The Office is Close");
}
 */

/* let hour = 9
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend){
    document.write("The Office is Close <br/>");
}

document.write(undefined|| null||0, "<br/>");

//cheack which variable has a value assignment 
let firstName = "";
let lastName ="";
let nickName = "SuperCoder";
document.write(firstName || lastName|| nickName || "Anonymous");

//short-circuit

true || document.write("not printed");
false || document.write("<br/>printed"); */


//&& Operator 
/* let hour = 12
let minute = 30;
if (hour ==12 && minute ==30){
    document.write("The Office is Close for lunch break<br/>");

}

document.write(1 && 2 && 3); */



let age = 15;

if(age >=14 && age <=90){
    document.write(`Your age is ${age}`);
}
age = 10
if (!(age >=14 && age <=90))
{
    document.write(`<br/>Please try again your age is ${age}`);
}
/***
 * Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
The schema (Image 001)
 */
let username = prompt("Who is there?");

if (username === "Admin"){
    let password = prompt("Please enter your Password");
    if (password === "TheMaster"){
        alert("Welcome!")
    }
    else if (password === "")
    {
        alert("No Password Enter");
    }
    else
    {
        alert("Wrong Password");
    }
}
else if(username === "")
{
    alert("No Username Enter")
}
else{
    alert("Wrong Username");
}