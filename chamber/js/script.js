// Date: Select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// Date: Rerive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


// Last update
document.querySelector("#lastupdate").innerHTML = `Last Updated: ${document.lastModified}`


// Hamburger menu
function toggleMenu(){

    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton")
x.onclick=toggleMenu