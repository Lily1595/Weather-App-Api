//grab the elements needed from html using query selector 
let formHeading = document.querySelector('#form-heading');
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let historyList = document.querySelector('#history');

let index = 0;

//when the page loads this code retrieves any saved history buttons from local storage
//if saved data is present, the innerHTML of history list is altered 
window.addEventListener("load", function () {
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

    //get api key and api address
    let APIKey = "bdd2c0c8b3b660738955be8280edc04c";
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + chosenCity + "&appid=" + APIKey;

    //get values from API
    fetch(queryURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector(".city-name").innerHTML = "City Name";
        document.querySelector(".temp").innerHTML = "Temperature";
        document.querySelector(".wind").innerHTML = "Wind Speed";
        document.querySelector(".humidity").innerHTML = "Humidity";
        document.querySelector(".city-name").innerHTML += ": " + data.name;
        document.querySelector(".temp").innerHTML += ": " + data.main.temp + "°C";
        document.querySelector(".wind").innerHTML += ": " + data.wind.speed + "m/s";
        document.querySelector(".humidity").innerHTML += ": " + data.main.humidity + "%";
      });
      
      //5 day forecast 
      // get geo coordinates with name of city 
      let queryURL2 = "http://api.openweathermap.org/geo/1.0/direct?q=" + chosenCity + "&limit=" + 5 + "&appid=" + APIKey

      fetch(queryURL2)
      .then(response => response.json())
      .then(data => { console.log(data)

         //use lat and lon to get the 5 day forecast 
      let queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=" + APIKey;
      fetch(queryURL3)
      .then(response => response.json())
      .then(data2 => { console.log(data2)
      }); 

  });
})})
