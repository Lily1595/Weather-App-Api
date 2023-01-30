//get api key and api address
let APIKey = "bdd2c0c8b3b660738955be8280edc04c";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

//grab the elements needed from html using query selector 
let formHeading = document.querySelector('#form-heading');
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let historyList = document.querySelector('#history');

let index = 0

/*fetch(queryURL)
  .then(response => response.json())
  .then(data => {
    console.log(data); //works 
  })*/

//following code adds event listener on the search button. when it's clicked the default behaviour of a form is prevented. a new variable called chosenCity is created and set to the value of the searchInput element. Then a new history button element is created by cloning the search button. the text content of the history button is set to the chosenCity variable and then the history buttons are appended to the history list. The textContent of all the history button elements is then stored in localStorage with index as the key.

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  let chosenCity = searchInput.value;
  let historyButton = searchButton.cloneNode(true);
  historyButton.classList.add("history-button", "bg-light", "w-100", "btn", "mt-3", "text-dark");
  historyButton.textContent = chosenCity;
  historyList.appendChild(historyButton);
  localStorage.setItem(index, historyButton.textContent);
});

