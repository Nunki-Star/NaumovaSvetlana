
let lastName;

do {
    (lastName = prompt("Please enter your last name", ""))
} while (isNaN(lastName) === false ||parseFloat(lastName) || lastName == null || lastName == undefined || lastName == '' ||  lastName == 'null' || lastName.length >= 30)

let userName;

do {
    (userName = prompt("Please enter your name", ""))
} while (parseFloat(userName) || userName == null || userName == undefined || userName == '' ||  userName == 'null' || userName.length >= 30)

let userSurname;

do {
    (userSurname = prompt("Please enter your surname", ""))
} while (parseFloat(userSurname) || userSurname == null || userSurname == undefined || userSurname == '' ||  userSurname == 'null' || userSurname.length >=30)

let userAge;
/*while (userAge = prompt ("Please enter your age", "")){
    if (userAge === "" || isNaN(userAge)){
        alert("The age you've entered is not correct, try again!");
        continue;
    }
}*/

do{
   
    (userAge = prompt ("Please enter your age", ""))
}while((userAge.isNumeric = false || userAge === "" || isNaN(userAge) || userAge.length >= 3))


const ageInFiveYears = parseInt(userAge) + 5;
const ageInDays = parseInt(userAge) * 365;

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



