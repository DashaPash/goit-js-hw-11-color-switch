const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')
let intervalID = null

startBtn.addEventListener('click', clickStartBtn)
stopBtn.addEventListener('click', clickStopBtn)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function clickStartBtn(e) {
    if (e.target.textContent === 'Start') {
        intervalID = setInterval(() => {
        document.body.setAttribute('style', `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]}`)
        }, 1000);
    }
    startBtn.disabled = true  
}

function clickStopBtn(e) {
    if (e.target.textContent === 'Stop') {
        document.body.removeAttribute('style', `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]}`)
        clearInterval(intervalID)
    }
    startBtn.disabled = false
}
