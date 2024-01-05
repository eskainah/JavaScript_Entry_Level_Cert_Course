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

let hour = 9
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
false || document.write("<br/>printed");

