document.addEventListener('DOMContentLoaded', function () {
  var quotes = [];
  const options = {
    method: 'GET',
  };

  fetch('https://type.fit/api/quotes', options)
    .then((response) => response.json())
    .then((response) => {
      response.forEach((quote) => quotes.push(quote));
      document.querySelector('#quote').innerHTML = quotes[0].text;
      document.querySelector('#author').innerHTML = quotes[0].author;
    })
    .catch((err) => console.error(err));
  generateQuote(5000, quotes);

  const button = document.querySelector('#button');
  button.addEventListener('click', function () {
    var countdown = document.querySelector('#countdown');
    countdown.style.visibility = 'visible';
    startTimer();
  });
});

let timeIsRunning = false;
const FULL_DASH_ARRAY = 503;
let timer;
const DURATION = 30;
let timeLeft = DURATION;
let timePassed = 0;

function startTimer() {
  button.style.visibility = 'hidden';
  timer = setInterval(() => {
    timeLeft--;
    setCircleDasharray();
    if (timeLeft === 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  countdown.style.visibility = 'hidden';
  button.style.visibility = 'visible';
  timeLeft = DURATION;
  timePassed = 0;
}

function setCircleDasharray() {
  const updatedDashArray = ((timeLeft / DURATION) * FULL_DASH_ARRAY).toFixed(0);
  const circleDasharray = `${updatedDashArray} ${FULL_DASH_ARRAY}`;
  const circle = document.querySelector('#circle');
  if (updatedDashArray >= 0) circle.style.strokeDasharray = circleDasharray;
}

function generateQuote(wait, quotes) {
  const id = setInterval(() => {
    const random = Math.floor(Math.random() * quotes.length);
    document.querySelector('#quote').innerHTML = quotes[random].text;
    document.querySelector('#author').innerHTML = quotes[random].author;
  }, wait);
}
