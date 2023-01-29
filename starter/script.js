let APIKey = "bdd2c0c8b3b660738955be8280edc04c";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let historyList = document.querySelector('#history');

//remember on forms you have to use prevent default 
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
}); 
