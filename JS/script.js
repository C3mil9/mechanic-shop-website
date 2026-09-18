// Finds the mobile menu button.
const menuButton = document.getElementById("menu-button");

// Finds the navigation menu.
const navigationMenu = document.getElementById("nav-menu");


// Opens and closes the navigation menu on phones.
menuButton.addEventListener("click", function () {

    navigationMenu.classList.toggle("show");

    const menuIsOpen =
        navigationMenu.classList.contains("show");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


// Closes the phone menu after selecting a link.
const navigationLinks =
    navigationMenu.querySelectorAll("a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationMenu.classList.remove("show");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// Connects each section in index.html
// to its separate HTML file.
const websiteSections = [
    {
        id: "home",
        file: "HTML Sections/home.html"
    },
    {
        id: "services",
        file: "HTML Sections/services.html"
    },
    {
        id: "about",
        file: "HTML Sections/about.html"
    },
    {
        id: "contact",
        file: "HTML Sections/contact.html"
    },

    {
        id:"footer",
        file: "HTML Sections/footer.html"
    }
];


// Loads one HTML file.
async function loadSection(section) {

    const response = await fetch(section.file);

    if (!response.ok) {

        throw new Error(
            `Could not load ${section.file}`
        );

    }

    const sectionHTML = await response.text();

    const sectionElement =
        document.getElementById(section.id);

    sectionElement.innerHTML = sectionHTML;
}


// Loads all the HTML files.
async function loadWebsite() {

    try {

        await Promise.all(
            websiteSections.map(loadSection)
        );

        //connection to map button
        setupMapMenu();
        
        if (window.location.hash) {

            const selectedSection =
                document.querySelector(
                    window.location.hash
                );

            selectedSection?.scrollIntoView();

        }

    } catch (error) {

        console.error(
            "Website section error:",
            error
        );

    }

}

loadWebsite();


//Popup for location options 
//button implementation

//fetching the buttons address ID
function setupMapMenu(){
    const addressButton=
    document.getElementById("address-button");

    const mapMenu=document.getElementById("map-menu");

    if(!addressButton || !mapMenu){
        return;
    }

    addressButton.addEventListener("click", function(){
        mapMenu.classList.toggle("show");
    });
}


