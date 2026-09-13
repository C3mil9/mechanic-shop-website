
//this function helps find the hamburger drop down menu
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

//this function will run once the button is pressed
menuButton.addEventListener("click", function(){
    //adds or removes the "Show" CSS class
    navMenu.classList.toggle("show");

        //will check whether the menu is open
    const menuIsOpen = navMenu.classList.contains("show");
    
    //show when the menu is open
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

//close after the naviagtion link is pressed 
navMenu.addEventListener("click", function(){
    navMenu.classList.remove("show");
    //aria-expanded will tell iof the menu is open or closed
    menuButton.setAttribute("aria-expanded", "false");
});