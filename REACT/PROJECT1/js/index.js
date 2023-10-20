ReactDOM.render(React.createElement('input',{
    placeholder:"enter your text",
    onClick:()=>console.log("hi"), 
    onMouseEnter:()=> console.log("mouse over")
}), document.getElementById("app"))