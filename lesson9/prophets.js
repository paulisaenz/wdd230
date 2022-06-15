const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

async function getProphets() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    buildProphetCards();
  } else {
    throw Error (response.statusText)
  }
}

function buildProphetCards(data) {

  data.prophets.forEach(prophet => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let img = document.createElement("img");

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Location of Birth: ${prophet.birthplace}`;
    img.setAttribute("src", prophet.imageurl);
    img.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname} - ${order}° Latter-day President`);
    img.setAttribute("loading", "lazy");


    card.append(h2);
    card.append(p);
    card.append(img);
    cards.append(card);
  });
}


getProphets();