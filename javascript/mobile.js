
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");
const nav_button = document.querySelector(".nav-button");
const nav_menu = document.querySelector(".nav-menu");

window.addEventListener('load', () => {
    
    if(window.screen.width <= 800){
       
        header.classList.add("mobile");
        footer.classList.add("mobile");
        main.classList.add("mobile");
 
     } else{

        header.classList.remove("mobile");
        footer.classList.remove("mobile"); 
        main.classList.remove("mobile");
     }
});

window.addEventListener('resize', () => {
    if(window.screen.width <= 800){
       
        header.classList.add("mobile");
        footer.classList.add("mobile");
        main.classList.add("mobile");
 
     } else{

        header.classList.remove("mobile");
        footer.classList.remove("mobile"); 
        main.classList.remove("mobile");
     }

})


nav_button.addEventListener("click", ()=>{

    if(nav_menu.classList.contains("desactive")){
        nav_menu.classList.remove("desactive");
        nav_button.innerHTML = '<span class="material-icons">close</span>';
        
    }else{
        nav_menu.classList.add("desactive");
        nav_button.innerHTML = '<span class="material-icons">menu</span>';
        
    }

})
