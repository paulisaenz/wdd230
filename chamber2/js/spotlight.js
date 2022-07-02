const requestURL =
  "json/data.json";
const spotlights = document.querySelector(".spotlight");

async function getSpotlight() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    console.log(data.businesses);
    buildSpotlight(data.businesses);
  } else {
    throw Error(response.statusText);
  }
}

function buildSpotlight(data) {
    let goldMembership = data.businesses.filter(mstatus => mstatus.membership == "Gold Membership");
    goldMembership.forEach((business) => {
    let spotlight = document.createElement("div");
    let name = document.createElement("h2");
    let memo = document.createElement("h4");
    let info = document.createElement("p");

    spotlights.classList.add("spotlight");
    // img.classList.add("card-img")

    name.innerHTML = `${business.name}`;
    memo.innerHTML = `📍 ${business.address}`;
    info.innerHTML = `${business.email} <br />${business.phone} | <a href= "${business.web}" target="_blank">Website</a>`;

    // img.setAttribute("src", business.imageurl);
    // img.setAttribute(
    //   "alt",
    //   `Logo of ${business.name}`
    // );
    

    img.setAttribute("loading", "lazy");

    spotlight.append(spotlight);
    spotlight.append(memo);
    spotlight.append(info);
    spotlights.append(spotlight);
  });
}

getSpotlight();