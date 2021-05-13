// display current time
let now = new Date();

function displayTime(event) {
  //set variables for current time
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let amPM = "AM";
  // change to 12-hour clock and set PM if after 12
  if (currentHours > 12) {
    currentHours = currentHours - 12;
    amPM = "PM";
  }
  // set display text for #current-time
  let actualTime = `${currentHours}:${currentMinutes} ${amPM}`;

  currentTime.innerHTML = actualTime;
}

// link variable currentTime to #current-time div element
let currentTime = document.querySelector("#current-time");

// add the load HTML DOM event to currentTime, set function displayTime
currentTime.addEventListener("DOMContentLoaded", displayTime());

// display current date
function displayDate(event) {
  let monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentMonth = monthsArr[now.getMonth()];
  currentMonth = currentMonth.toUpperCase();
  let currentDay = now.getDate();

  let actualDate = `${currentMonth} ${currentDay}`;

  currentDate.innerHTML = actualDate;
}
// link variable currentDate to #current-date div element
let currentDate = document.querySelector("#current-date");

// add the load HTML DOM event to currentTime, set function displayTime
currentDate.addEventListener("DOMContentLoaded", displayDate());

//display temp in city from search input
function showTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("h2");
  tempDisplay.innerHTML = `${currentTemp}\xB0C💓`;
}

// display search input
function showSearchInput(event) {
  event.preventDefault();
  let h1Text = document.querySelector("h1");
  let inputText = document.querySelector("#loc-search-input");

  h1Text.innerHTML = inputText.value;

  //inputText.value = "";

  let apiKey = "dc7771fb57d0403dbd163832b559b2be";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  let units = "metric";
  let cityName = inputText.value;

  axios
    .get(`${apiUrl}q=${cityName}&units=${units}&appid=${apiKey}`)
    .then(showTemp);
}

let searchForm = document.querySelector("#location-form");
searchForm.addEventListener("submit", showSearchInput);
