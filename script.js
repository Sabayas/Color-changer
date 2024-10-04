const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const clear = document.getElementById("clear")

buttons.forEach((button) =>{
    button.addEventListener("click", function(e){
        if(e.target.id == "red"){
        body.style.backgroundColor = e.target.id;
    }

    if(e.target.id == "blue"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "green"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "grey"){
        body.style.backgroundColor = e.target.id;
    }
    })
clear.addEventListener("click", function (e) {
    body.style.backgroundColor = "white";
})
    
})
