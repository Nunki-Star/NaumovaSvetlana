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
           document.body.style.height = "100%";
           document.body.style.width = "100%";
           document.html.style.height = "100%";
           document.html.style.width = "100%";
           document.querySelector(".phone").style.display = "block";
           document.querySelector(".phone").style.marginTop="50%"
           document.querySelector(".message").style.display = "block",
           document.querySelector(".message").style.fontFamily = "Jelantik";
           document.querySelector(".message").style.fontSize="30px"


    }else if(landscape){
        /*;
        document.body.style.backgroundImage="url(../images/gradient-forest-landscape.jpg.avif)";*/
        
    }
 })