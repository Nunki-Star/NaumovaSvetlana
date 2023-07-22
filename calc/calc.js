const x = null; 
const y = null;
const sign = ""

function getNumber(num){
    
        if(x === null){
            x=num
        }
        else{
            y=num
        }
    }

    function getSign(operation){
        sign = operation
    }

    function result(){
        var EL = document.getElementById('result');

        switch(operVariable){
            case "+": 
                EL.innerText = x+y;
                break;
            case "-": 
                EL.innerText = (x-y).toString();
                break;
            case "*": 
                EL.innerText = (x*y).toString();
                break
            case "/":
                EL.innerText = (x/y).toString();
                break
    
        }
    }



