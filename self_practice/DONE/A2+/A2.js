function removeSpaceWithNoTrim(str){
    //for(let i = 0; i<str.length; i++){
        if(str.indexOf(" ") === 0 && str.lastIndexOf(" ") !== -1){
            //let outputString=str.replace(/ /g,"");
            let outputString = str.replace(" ","");
            return outputString;
        }
    }

console.log(removeSpaceWithNoTrim(" svetlana "))
