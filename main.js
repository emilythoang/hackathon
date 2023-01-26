document.addEventListener('DOMContentLoaded', function () {
  var quotes = [];
  const options = {
    method: 'GET',
  };

  fetch('https://type.fit/api/quotes', options)
    .then((response) => response.json())
    .then((response) => {
      response.forEach((quote) => quotes.push(quote));
    })
    .catch((err) => console.error(err));
  console.log(quotes);
  const countLogger = delayCounter(5000, quotes);

  countLogger();
  function delayCounter(wait, quotes) {
    return function () {
      let i = 0;
      const id = setInterval(() => {
        document.querySelector('#quote').innerHTML = quotes[i].text;

        document.querySelector('#author').innerHTML = quotes[i].author;
        i++;
        if (i >= quotes.length) clearInterval(id);
      }, wait);
    };
  }
});

const button = document.createElement('button');
button.setAttribute('id', 'start');

button.addEventListener('click', function () {
  startTimer();
});

var countdown = document.querySelector('#countdown');
var num = 360;

const minute = 1;
let duration = minute * 60;

/*

var startTimer = setInterval(() => {
  if (duration >= 0) {
    circle.style.setProperty('--a', num + 'deg');
    const a = circle.style.getPropertyValue('--a');
    console.log(a);
    circle.style.background = ` conic-gradient(#8b8bff var(--a) ,#8b8bff 0deg ,#585862d5 0deg,#585862d5 360deg)`;
    num = num - num / duration;
    duration--;
  } else {
    clearInterval(interval);
  }
}, 1000);

/*
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: 'green',
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;



function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    if (timesLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function onTimesUp() {
  clearInterval(timerInterval);
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById('base-timer-path-remaining')
      .classList.remove(warning.color);
    document
      .getElementById('base-timer-path-remaining')
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById('base-timer-path-remaining')
      .classList.remove(info.color);
    document
      .getElementById('base-timer-path-remaining')
      .classList.add(warning.color);
  }
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById('base-timer-path-remaining')
    .setAttribute('stroke-dasharray', circleDasharray);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
*/
