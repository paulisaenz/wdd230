// initialize display elements
const likeDisplay = document.querySelector(".like");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;

// store the new number of visits value (writing/saving the new number to the local storage)
localStorage.setItem("visits-ls", numVisits);





$(".panel-group_btn span").click(function () {
  var btnStorage = $(this).attr("id");

  if ($(this).hasClass("clicked")) {
    localStorage.setItem(btnStorage, "true");
  } else {
    localStorage.removeItem(btnStorage, "true");
  }
});

$(".panel-group_btn span").each(function () {
  var mainlocalStorage = $(this).attr("id");

  if (localStorage.getItem(mainlocalStorage) == "true") {
    $(this).addClass("clicked");
  } else {
    $(this).removeClass("clicked");
  }
});
