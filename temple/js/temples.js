const requestURL =
  "json/data.json";
const cards = document.querySelector(".cards");

async function getTemples() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    //console.log(data.temples);
    buildTempleCards(data.temples);
  } else {
    throw Error(response.statusText);
  }
}

function buildTempleCards(data) {
  data.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("p")
    let history = document.createElement("p");
    let img = document.createElement("img");
    let ordinance = document.createElement("p");
    let session = document.createElement("p");
    let closure = document.createElement("p");
    let titleimg = document.createElement("div")

    titleimg.classList.add("titleimg")
    img.classList.add("templesimg");
    card.classList.add("cardsTemples")

    name.innerHTML = `${temple.name}`;
    img.setAttribute("src", temple.imageurl);
    img.setAttribute(
      "alt",
      `Picture of ${temple.name}`);
    address.innerHTML = `<b>Address:</b> ${temple.address}.`;
    phone.innerHTML = `<b>Phone:</b> ${temple.phone}`;
    email.innerHTML = `<b>Email:</b> ${temple.email}`;
    history.innerHTML = `<b>Some history...</b> </br> </br> ${temple.history}`;
    services.innerHTML = `<b>Services:</b> ${temple.services}.`;
    ordinance.innerHTML = `<b>Ordinance schedule:</b> ${temple.ordinance}.`;
    session.innerHTML = `<b>Session schedule:</b> ${temple.session}.`;
    closure.innerHTML = `This Temple closes at <b>${temple.closure}.</b>`;

    
    

    img.setAttribute("loading", "lazy");

    titleimg.append(name);
    titleimg.append(img);
    card.append(titleimg);
    card.append(address);
    card.append(phone);
    card.append(email);
    card.append(history);
    card.append(services);
    card.append(ordinance);
    card.append(session);
    card.append(closure);

    cards.append(card);
  });
}

getTemples();