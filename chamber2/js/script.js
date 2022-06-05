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
}

// const close = document.querySelector("#closebutton");

// close.addEventListener("click", function() {
//         banner.style.display = "none";
// });

// initialize display elements
// const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// get the number of milliseconds (date in milliseconds) the last time the page was visited
let numMills = Number(window.localStorage.getItem("mills-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;

// store the new number of visits value (writing/saving the new number to the local storage)
// localStorage.setItem("visits-ls", numVisits);

// // show number of days //
// // if the number of milliseconds does not = 0
// if (numMills !== 0) {  
// 	// then do this math equation and round to a whole number which will now = (NumDays)
//     numDays = Math.round((Date.now() - numMills) / 86400000); 
// 	// now go to the todayDisplay and retrieve todays date and diplay a "text" number we 
// 	// will call numDays 
// 	todayDisplay.textContent = numDays;

// } else {
// 	todayDisplay.textContent = `This is your first visit!`;
// }

// store the current date in number of Milliseconds 
// numMills = Date.now();
// localStorage.setItem("mills-ls", numMills);
