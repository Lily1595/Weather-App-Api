//get api key and api address
let APIKey = "bdd2c0c8b3b660738955be8280edc04c";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

//grab the elements needed from html using query selector 
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let historyList = document.querySelector('#history');

//remember on forms you have to use prevent default 
//following code adds event listener on the submit button 
// 
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let chosenCity = searchInput.value;
  console.log(chosenCity); //this works 
  fetch(queryURL)
  .then(response => response.json())
  .then(data => {
    console.log(data); //works 
  })

}); 
