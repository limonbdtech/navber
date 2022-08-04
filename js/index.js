let add = document.querySelector("#add");
let remove = document.querySelector(".remove");

let nav = document.querySelector(".nav")

add.addEventListener("click",function(){
    console.log("i am limon")
    nav.style.display = "block";
    add.style.display = "none";
    remove.style.display= "block";

});

remove.addEventListener("click",function(){
    nav.style.display = "none";
    remove.style.display= "none";
    add.style.display= "block";
});

