document.getElementById("d1").addEventListener("click",changeText)

let d1 = document.getElementById("d1")
let dd1 = document.getElementById("d1").textContent
let d2 = document.getElementById("d2")
let dd2 = document.getElementById("d2").textContent
function changeText(){
    d1.innerHTML = dd2
    d2.innerHTML = dd1
}