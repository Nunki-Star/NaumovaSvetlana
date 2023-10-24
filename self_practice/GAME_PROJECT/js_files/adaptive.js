window.matchMedia("(orientation: portrait)").addEventListener("change", e=>{
    const portrait = e.matches;
    const mainColor = document.querySelector(".main")
    if(portrait){
        
       
           mainColor.style.display = "none";
           document.body.style.background="black";
           document.body.style.display = "flex";
           document.body.style.flexDirection = "column";
           document.body.style.justifyContent = "center";
           document.body.style.alignItems = "center";
          
           document.querySelector(".phone").style.display = "block";
           document.querySelector(".phone").style.marginTop="50%";
           document.querySelector(".message").style.display = "block";
           document.querySelector(".message").style.fontFamily = "Jelantik";
           document.querySelector(".message").style.fontSize="30px"


    }else{
        document.querySelector(".phone").style.display = "none";
        document.querySelector(".message").style.display = "none",
        
        
    }
 })