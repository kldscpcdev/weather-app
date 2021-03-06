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

// display search input
function showSearchInput(event) {
  event.preventDefault();
  let h1Text = document.querySelector("h1");
  let inputText = document.querySelector("#loc-search-input");

  h1Text.innerHTML = inputText.value;

  inputText.value = "";
}

let searchForm = document.querySelector("#location-form");
searchForm.addEventListener("submit", showSearchInput);

// switch between F and C temps
function switchToFahr(event) {
  event.preventDefault();
  let h2Text = document.querySelector("h2");
  h2Text.innerHTML = "63";
}
function switchToCel(event) {
  event.preventDefault();
  let h2Text = document.querySelector("h2");
  h2Text.innerHTML = "17";
}

let celUnit = document.querySelector("#cel-unit");
let fahrUnit = document.querySelector("#fahr-unit");

celUnit.addEventListener("click", switchToCel);
fahrUnit.addEventListener("click", switchToFahr);
