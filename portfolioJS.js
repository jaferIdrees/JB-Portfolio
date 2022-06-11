const openWindow = document.querySelectorAll(".open-window");
// const openWindow2 = document.querySelector(".open-window");

const closeWindow = document.querySelector(".close-window");
const closeWindow2 = document.querySelector(".close-window2");

const popUp1 = document.querySelector(".popub1");
const popUp2 = document.querySelector(".popub2");

openWindow.item(0).addEventListener("click", function (){
    popUp1.style.display = "block";
    popUp1.style.position = "absolue";
})

openWindow.item(1).addEventListener("click", function (){
    popUp2.style.display = "block";
    popUp2.style.position = "absolue";
})

closeWindow.addEventListener("click", function (){
    console.log("hello");
    popUp1.style.display = "none";
})

// openWindow2.onclick = function (){
//     popUp2.style.display = "block";
//     popUp2.style.position = "absolue";
// }

closeWindow2.addEventListener("click", function (){
    popUp2.style.display = "none";
})

document.querySelector(".hamburger").addEventListener("click", function (e){
    document.querySelector(".burgerNavList").style.display = "inline-block";
    e.target.style.visibility = "hidden";
})