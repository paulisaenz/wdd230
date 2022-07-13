// Date: Select the elements to manipulate (output to)
const datefield = document.querySelector(".current-date");

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
    document.getElementById("hmbrBtn").classList.toggle("open");
}

const x = document.getElementById("hmbrBtn")
x.onclick=toggleMenu