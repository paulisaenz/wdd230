const requestURL =
  "json/data.json";
const cards = document.querySelector(".cards");

async function getBusiness() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    console.log(data.businesses);
    buildBusinessCards(data.businesses);
  } else {
    throw Error(response.statusText);
  }
}

function buildBusinessCards(data) {
  data.forEach((business) => {
    let card = document.createElement("section");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let webpage = document.createElement("p");
    let membership = document.createElement("p")
    let img = document.createElement("img");

    card.classList.add("maincards");
    img.classList.add("card-img")

    name.innerHTML = `<b>${business.name}</b>`;
    address.innerHTML = `📍 ${business.address}`;
    phone.innerHTML = `📞 ${business.phone}`;
    webpage.innerHTML = `🌐 <a href= "${business.web}" target="_blank">Website</a> `;
    membership.innerHTML = `🎖️ ${business.membership}`
    img.setAttribute("src", business.imageurl);
    img.setAttribute(
      "alt",
      `Logo of ${business.name}`
    );
    

    img.setAttribute("loading", "lazy");

    card.append(img);
    card.append(name);
    card.append(address);
    card.append(phone);
    card.append(webpage);
    cards.append(card);
  });
}

getBusiness();