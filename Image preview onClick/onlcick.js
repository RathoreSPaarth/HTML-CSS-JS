let x = document.getElementById("main")
let a = document.getElementById("d1")
let b = document.getElementById("d2")
let c = document.getElementById("d3")

a.addEventListener("click",imgOne)
b.addEventListener("click",imgTwo)
c.addEventListener("click",imgThree)


function imgOne(){
    let s = mainImg1.src
    mainImg1.src = d1img.src
    d1img.src = s

}

function imgTwo(){
    let s = mainImg1.src
    mainImg1.src = d2img.src
    d2img.src = s
}

function imgThree(){
    let s = mainImg1.src
    mainImg1.src = d3img.src
    d3img.src = s
}