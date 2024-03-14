var screen = document.querySelectorAll(".screen")
var btn = document.querySelector("button")
var elems = document.querySelectorAll(".elem")
var real = document.querySelector(".flax")

// var selacted = ""

btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"
})


elems.forEach(function (elem) {
    elem.addEventListener("click", function () {
        screen[2].style.transform = "translateY(-200%)"
        var flag = elem.childNodes[3].getAttribute("src")
        var newl = document.createElement("img")
        var x = Math.random() * 100
        var y = Math.random() * 100
        var rot = Math.random() * 360
        newl.setAttribute("src", flag)
        newl.style.left = x+ "%"
        newl.style.top = y+ "%"
        newl.style.rotate = rot+ "%"
        real.appendChild(newl)
    })
})