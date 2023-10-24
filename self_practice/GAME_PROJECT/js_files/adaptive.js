window.matchMedia("(orientation: portrait)").addEventListener("change", e=>{
    const portrait = e.matches;
    
    if(portrait){
        const mainColor = document.querySelector(".main")
           mainColor.style.display = "none";
        mainColor.style.backgroundColor = "black";


    }else{
        
    }
 })