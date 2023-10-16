const url = "https://restcountries.com/v3.1/all";
let row = document.querySelector(".row-co");
let search = document.querySelector("#search");
let refresh = document.querySelector("#refresh");

const api = async () => {
  let api = await fetch(url);
  let data = await api.json();

  let country = "";

  data.map((element) => {
    country += ` <div class="box">
    <img src="${element.flags.png}" />
    <h1 id='name'>${element.name.common}</h1>
    <div class="list">
      <div class="row">
        <span>Caasamada:</span>
        <p>${element.capital}</p>
      </div>
      <div class="row">
        <span>wakhtiga:</span>
        <p>${element.timezones[0]}</p>
      </div>
      <div class="row">
        <span>Qaarada:</span>
        <p>${element.region}</p>
      </div>
      <div class="row">
        <span>dadka:</span>
        <p>${element.population}</p>
      </div>
    </div>
  </div>`;
  });

  row.innerHTML = country;
};

api();

search.addEventListener("keyup", () => {
  let value = search.value;
  document.querySelectorAll("#name").forEach((items) => {
    if (items.firstChild.textContent.toLowerCase().indexOf(value) !== -1) {
      items.parentElement.style.display = "block";
    } else {
      items.parentElement.style.display = "none";
    }
  });
});

refresh.addEventListener("click", () => {
  search.value = "";
  api();
});
