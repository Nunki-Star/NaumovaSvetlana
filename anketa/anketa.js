const userName = prompt("Please enter your name", "");
const userLastname = prompt("Please enter your lastname", "");
const userSurname = prompt("Please enter your surname", "");
const userAge = parseInt(prompt("Please enter your age(full years)", ""));
const userGender = confirm(`For male gender kindly click on "yes" button, 
                            for female gender kindly click on "no" button`);

const ageInDays = userAge * 365;
const ageInFiveYears = userAge + 5;


if (userGender == true){
     gender = "male"
     if (userGender >= 63){
        retired = "retired"
     }
     else{
        retired = "not retired"
     }
}
else{
     gender = "female"
     if (userAge >= 58){
        retired = "retired"
     }
     else{
        retired = " not retired"
     }
}



const userInfo = alert(`Welcome to our first js task:  
                        ${userLastname} ${userName} ${userSurname} 
                        Your age is : ${userAge}
                        Your age in days is: ${ageInDays}
                        In five years ull be: ${ageInFiveYears}
                        Your gender is: ${gender}
                        Your retirement status is: ${retired}`)