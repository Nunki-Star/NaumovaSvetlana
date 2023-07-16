
let lastName;

do {
    (lastName = prompt("Please enter your last name", ""))
} while (lastName === NaN || parseFloat(lastName) || lastName == null || lastName == undefined || lastName == '' ||  lastName == 'null')

let userName;

do {
    (userName = prompt("Please enter your name", ""))
} while (lastName === NaN || parseFloat(userName) || userName == null || userName == undefined || userName == '' ||  userName == 'null')

let userSurname;

do {
    (userSurname = prompt("Please enter your surname", ""))
} while (lastName === NaN || parseFloat(userSurname) || userSurname == null || userSurname == undefined || userSurname == '' ||  userSurname == 'null')

let userAge;
/*while (userAge = prompt ("Please enter your age", "")){
    if (userAge === "" || isNaN(userAge)){
        alert("The age you've entered is not correct, try again!");
        continue;
    }
}*/

do{
    (userAge = parseInt(prompt ("Please enter your age", "")))
}while((userAge === "" || isNaN(userAge)))


const ageInFiveYears = userAge + 5;
const ageInDays = userAge * 365;

const userGender = confirm("for male gender click on confirm button, for female click on 'No' ");
const userGenderCheck = (userGender == true) ? "male" : "female";
let maleRetirement = (userGenderCheck == "male" && userAge >= 63) ? "retired" : "not retired";
let femaleRetirement = (userGenderCheck == "female" && userAge >= 58) ? "retired" : "not retired";
let retirementCheck = (userGender == true) ? maleRetirement : femaleRetirement;


 


alert(`your last name is ${lastName},
your name is ${userName}, 
your surname is ${userSurname},
your age is ${userAge},
your age is days is ${ageInDays},
your age in 5 years is ${ageInFiveYears},
your gender is ${userGenderCheck},
your retirement status is: ${retirementCheck}`)



