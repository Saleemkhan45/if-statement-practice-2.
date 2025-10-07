// Check if someone is eligible to vote (age ≥ 18) and citizen = true.
let age = 18;
let citizen = true;

if(age >= 18 && citizen === true) {
  console.log("you are eligible to vote");
} else{
    console.log("you are not eligible");
    
}


// Check if a number is between 10 and 50.
let numberInBetween = 15;

if(numberInBetween >= 10 && numberInBetween <= 50) {
    console.log("Number is between in 10 to 50");
} else {
    console.log("Number not in Between 10 50");
    
}


// Check if a number is divisible by 5.
let number = 24;
if(number % 5 === 0) {
    console.log("Number is divisible by 5");
} else{
    console.log("Number is not divisible");
    
}


// Check if a given password is strong (length ≥ 8).
let password = "he6o23";

if(password.length >= 8) {
    console.log("Password is strong");
} else {
    console.log("password is weak");
}