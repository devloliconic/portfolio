function openModalburger() {
    document.getElementById("burgerMenu").style.top = "0px";
}
const button = document.getElementById("openburger");
button.onclick = function() {
    openModalburger();
}
const closebtn = document.getElementById("closeBurger");
closebtn.onclick = function(){
    closeModalburger();
}
function closeModalburger() {
    document.getElementById("burgerMenu").style.top = "-800px";
}




var link = document.querySelectorAll(".discuss");
const closepopu = document.getElementById("closepopup");
for(let i=0; i< link.length;i++){
    link[i].onclick = function(){
        openModal();
    }
}
closepopu.onclick = function(){
    closeModal();
} 
function openModal() {
    document.getElementById("popUp").style.display = "block";
}

function closeModal() {
    document.getElementById("popUp").style.display = "none";
}


import 'normalize.css';

import '../scss/main.scss';



