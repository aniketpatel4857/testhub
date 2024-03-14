// var arr = [
// {dp:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbSUyQ2FufGVufDB8fDB8fHww", img:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbSUyQ2FufGVufDB8fDB8fHww"},
// {dp:"https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"},
// {dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1495216875107-c6c043eb703f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},
// {dp:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbSUyQ2FufGVufDB8fDB8fHww", img:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbSUyQ2FufGVufDB8fDB8fHww"},
// {dp:"https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"},
// {dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1495216875107-c6c043eb703f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},]

// const { doc } = require("prettier");


// var ans = ""
// arr.forEach(function(elem, index){
//     ans += `<div class="story">
//     <img id=${index} src="${elem.dp}" alt="">
//   </div>`
// })

// var full = document.querySelector("#full")
// var story = document.querySelector("#storiyan")
// var scrol = document.querySelector("#groww")

// story.innerHTML = ans

// var flag = 0

// story.addEventListener("click",function(dets){
//     full.style.display = "block"
//     full.style.backgroundImage = `url(${arr[dets.target.id].img})`
//     var int = setInterval(function() {
//         if (flag <= 100) {
//             var hero = flag++
//           scrol.style.width =  `${hero++}%`
//         }
//     },30);
//     setTimeout(function(){
//         full.style.display = "none"
//         clearInterval(int);
//         location.reload();
//     },3000)
// })

var img1 = document.querySelector("#img1")
var img2 = document.querySelector("#img2")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    img1.getAttribute("src","#img2")
    img2.getAttribute("src","#img1")
    img1.setAttribute("src","#img2")
    img2.setAttribute("src","#img1")
})
