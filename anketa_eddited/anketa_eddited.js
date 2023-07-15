const userLastName = prompt("kindly enter your last name in this field", "");
const userName = prompt("Kindly enter your name in this field", "");
const userSurname = prompt("Kinly enter your surname in this field");
let userAge;
do{
    userAge = parseInt(prompt("Please enter your age"));
    } while(userAge === "");
    


const ageInFiveYears = userAge + 5;
const ageInDays = userAge * 365;

const userGender = confirm("for male gender click on confirm button, for female click on 'No' ");
const userGenderCheck = (userGender == true) ? "male" : "female";
let maleRetirement = (userGenderCheck == "male" && userAge >= 63) ? "retired" : "not retired";
let femaleRetirement = (userGenderCheck == "female" && userAge >= 58) ? "retired" : "not retired";
let retirementCheck = (userGender == true) ? maleRetirement : femaleRetirement;


 


alert(`your last name is ${userLastName},
your name is ${userName}, 
your surname is ${userSurname},
your age is ${userAge},
your age is days is ${ageInDays},
your age in 5 years is ${ageInFiveYears},
your gender is ${userGenderCheck},
your retirement status is: ${retirementCheck}`)



