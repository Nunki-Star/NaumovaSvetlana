const mediaQuery = window.matchMedia('(max-width: 812px)');

function someFunc() {
    
   
    if (w < 900) {
      document.getElementsByClassName("weirdtext").style = "blue";
    }
  }

  function changeCoordinates(){
    let w = window.innerWidth;
    console.log(w)
    const smiley = document.getElementsByTagName("i");
    const toolTips = document.querySelectorAll("span");
    const buttonToREmove = document.querySelectorAll("button");
    const mainDiv = document.getElementsByClassName("main");
    let myBlock = document.getElementById("right");

    if(smiley[1].getAttribute("class")==="fa-solid fa-face-smile fa-bounce fa-2xl" && w < 900){
      alert("yes")
        /*smiley[1].removeAttribute("class");
        smiley[1].setAttribute("class", "fa-solid fa-house fa-bounce fa-2xl");
        document.querySelector(".container").style.marginBottom = "50px"
        document.querySelector(".container").style.textAlign = "left";
        
        document.querySelector(".container").style.marginLeft = "-20px";
        document.querySelector(".container").style.marginTop = "20px";
        document.querySelector("#weirdtext").style.fontSize = "130px";
        document.querySelector("#largeText").style.fontSize = "140px";
        document.querySelector(".buttons").style.justifyContent= "left";
document.querySelector(".buttons").style.marginLeft = "-10px";
        buttonToREmove[3].style.visibility = "hidden";
        buttonToREmove[4].style.visibility = "hidden"
        toolTips[1].innerHTML="Home";
        myBlock.style.display = "block";
        document.querySelector(".main").style.flexDirection="row";
        document.querySelector(".main").style.justifyContent = "space-evenly";
        document.querySelector(".main").style.marginTop = "20px";
document.querySelector(".input").style.display = "none"
document.querySelector("#result").style.display = "block";
document.querySelector("#result").style.color = "#F04A00";
document.querySelector("#result").style.fontFamily = "Jelantik";
document.querySelector("#result").style.fontSize = "140px";
document.querySelector("#result").style.textShadow = "2px 20px 25px lightyellow";
document.querySelector("#result").style.opacity = "0.9"
document.querySelector("#enjoy").style.display = "block";
document.querySelector("#enjoy").style.color = "#F04A00";
document.querySelector("#enjoy").style.fontFamily = "Jelantik";
document.querySelector("#enjoy").style.fontSize = "140px";
document.querySelector("#enjoy").style.textShadow = "2px 20px 25px lightyellow";
document.querySelector("#enjoy").style.opacity = "0.9";
document.querySelector("#enjoy").style.marginTop = "-35px";

    }else{
        smiley[1].removeAttribute("class");
        smiley[1].setAttribute("class", "fa-solid fa-face-smile fa-bounce fa-2xl");
        document.querySelector(".container").style.justifyContent = "center";
        document.querySelector(".container").style.textAlign = "center";
        document.querySelector(".buttons").style.justifyContent= "center";
        document.querySelector("#weirdtext").style.fontSize = "200px";
        document.querySelector("#largeText").style.fontSize = "240px";
        document.querySelector(".container").style.marginTop = "140px"
        toolTips[1].innerHTML="Play";
        buttonToREmove[3].style.visibility = "visible";
        buttonToREmove[4].style.visibility = "visible";
        myBlock.style.display = "none";
        document.querySelector(".input").style.display = "block"
document.querySelector("#result").style.display = "none";
document.querySelector("#enjoy").style.display = "none";*/
    }

}