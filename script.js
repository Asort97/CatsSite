function count(){
    for(let i=1; i<=3; i++)
    {
        alert("Current Number - " + i);
    }
}
document.getElementById("text").onclick = function(){
    myFunc();
}

function myFunc(){
    document.getElementById("text").innerHTML = "НАЖМИ НА МЕНЯ";
}
