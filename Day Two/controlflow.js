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


/* 
let age = 15;

if(age >=14 && age <=90){
    document.write(`Your age is ${age}`);
}
age = 10
if (!(age >=14 && age <=90))
{
    document.write(`<br/>Please try again your age is ${age}`);
} */
/***
 * Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
The schema (Image 001)
 */
/* let username = prompt("Who is there?");

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

// the question mark operator
let age = 15;
let allowAccess = age > 18 ? true : false;
document.write(allowAccess)

//mutltiple question mark operator
allowAccess = (age < 3)? "Hi, Baby!" : 
              (age < 18) ? "Hello, Teenager" :
              (age < 100) ? "You are an adult" : 
                            "what an unusual age";
            document.write("<br/>", allowAccess); 

 let company = "Netscape";

 (company == "Netscape") ? 
        document.write("<br/>Right") : document.write("<br/>Wrong...")

    //using if statement 
    if (company == 'Netscape') {
        document.write("<br/>Right");
      } else {
        document.write("<br/>Wrong...")
      }

      if ("0"){
        document.write("<br/>Hello")
      }

      let result, a = 3, b = 4;

      (a + b < 4) ?
            result = "Below" : result = "over";
            document.write("<br/>", result);
 */

    //Switch Statements

    let dean = prompt("Please Enter your Department");

    switch(dean){
        case "Computer":
        document.write("Dr. Hussien");
        break

        case "Business":
        document.write("Dr. Ada");
        break
    default:
        document.write("Please Visit Studdent Affairs");
        break
    }

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>