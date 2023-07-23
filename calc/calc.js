let num1 = null, 
    num2 = null, 
    sign = "";

    function getNumber(num){
    
        if(num1 === null){
            num1=num;
            console.log(num1);
        }
        else{
            num2=num;
            console.log(num2);
        }
    }

    function getSign(operation){
        sign = operation;
        console.log(sign);
    }

    function getResult(){
        switch(sign){
            case "+": 
                console.log(num1+num2);
                break;
            case "-": 
                console.log(num1-num2);
                break;
            case "*": 
               console.log(num1*num2);
                break;
            case "/":
               console.log(num1/num2);
                break;
        }
    }










