// Date: Select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// Date: Rerive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


// Last modification
document.querySelector("#lastmodification").innerHTML = `Last Modification: ${document.lastModified}`


// Hamburger menu
function toggleMenu(){

    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton")
x.onclick=toggleMenu


// Banner

let d = new Date().getDay();

const banner = document.querySelector("#banner");
if (d === 1 || d === 2) {
    banner.style.display = "block;"
} else {
	banner.style.display = "hidden";
}

// const close = document.querySelector("#closebutton");

// close.addEventListener("click", function() {
//         banner.style.display = "none";
// });


//Directory Page

const gridbutton = document.querySelector("#cards");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", showList);

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
