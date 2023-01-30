//get api key and api address
let APIKey = "bdd2c0c8b3b660738955be8280edc04c";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

//grab the elements needed from html using query selector 
let formHeading = document.querySelector('#form-heading');
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let historyList = document.querySelector('#history');

let index = 0;

//when the page loads this code retrieves any saved history buttons from local storage
//if saved data is present, the innerHTML of history list is altered 
window.addEventListener("load", function() {
  let savedHistory = localStorage.getItem("historyButtons");
  if (savedHistory) {
    historyList.innerHTML = savedHistory;
  }

//when the search button is clicked, a new vairable is created called chosenCity which is set equal to the value of the user input 
//a new variable called history button is created to be a clone of the search button 
//classes are added to the history button and the text content is set as equal to the chosenCity variable 
//then the history button is appended to the historyList 
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  let chosenCity = searchInput.value;
  let historyButton = searchButton.cloneNode(true);
  historyButton.classList.add("history-button", "bg-light", "w-100", "btn", "mt-3", "text-dark");
  historyButton.textContent = chosenCity;
  historyList.appendChild(historyButton);
  localStorage.setItem("history" + index, historyButton.textContent);
  index++;
});
});

