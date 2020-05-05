document.getElementById("d").addEventListener("mouseover",changeColour1)
document.getElementById("d").addEventListener("mouseout",changeColour2)

function changeColour1(){
    document.getElementById("d").style.backgroundColor = "red"
}

function changeColour2(){
    document.getElementById("d").style.backgroundColor = "aqua"
}
