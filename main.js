const fetched = document.querySelector(".fetched");
const clickMe = document.querySelector(".test");
const search = document.querySelector(".search");

const Kids = {
  basement: 2,
  front_room: "I lost count fr",
  age: "less than 10",
};

const weatherKey = "5b0cf8dc7a67325da249436a01c3caae";

fetched.innerHTML = `So I got ${Kids.basement} kids in my basement and ${Kids.front_room} in the front room, all ${Kids.age} years old`;

async function FetchFromApi() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${weatherKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const finalized = JSON.stringify(data);

    fetched.innerHTML = finalized;
  } catch (err) {
    console.error(err);
  } finally {
    clickMe.innerHTML = "Hooray we got shit backkk";
  }
}

clickMe.addEventListener("click", () => {
  FetchFromApi();
});

const getInputname = document.querySelector(".mynamefr");

const whatsmyname = document.querySelector(".mynamecuh");
whatsmyname.innerHTML = "Marquanfr";
clickMe.addEventListener("click", () => {
  whatsmyname.innerHTML = getInputname.value;
});

class GetHisAss {
  constructor(username, password, mail) {
    this.username = username.value;
    this.password = password.value;
    this.mail = mail.value;
  }

  WhatDuhHell() {
    return `Yo username ${this.username} and password ${this.password} with mail ${this.mail}`;
  }
}

const william = document.querySelector(".william");
const da = document.querySelector(".da");
const hoe = document.querySelector(".hoe");
const cheese = document.querySelector(".cheese");
const NewKid = new GetHisAss(william, da, hoe);
clickMe.addEventListener("click", () => {
  cheese.innerHTML = NewKid.WhatDuhHell();
});
