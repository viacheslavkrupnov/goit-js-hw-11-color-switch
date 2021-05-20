import colors from './colors.js';
  // console.log(colors);

 const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
  };

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const DELAY = 1000;
  let intervalId;

const switchColor = () => {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor= colors[color];
}

const startHandler = () => {
  refs.startBtn.disabled = true;
  intervalId = setInterval(switchColor, DELAY);
}

const stopHandler = () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startHandler);
refs.stopBtn.addEventListener('click', stopHandler);
  
