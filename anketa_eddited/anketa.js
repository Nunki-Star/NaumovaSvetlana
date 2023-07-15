const userLastName = prompt("kindly enter your last name in this field", "");
const userName = prompt("Kindly enter your name in this field", "");
const userSurname = prompt("Kinly enter your surname in this field");

const userAge = parseInt(prompt("Please enter your age"));
const ageInFiveYears = userAge + 5;
const ageInDays = userAge * 365;

const userGender = confirm("for male gender click on confirm button, for female click on 'No' ");
 


alert(`your last name is ${userLastName},
your name is ${userName}, 
your surname is ${userSurname},
your age is ${userAge},
your age is days is ${ageInDays},
your age in 5 years is ${ageInFiveYears},
your gender is ${checkTheGender},
your retirement status is ${}`)



