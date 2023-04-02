const loadingEl = document.querySelector(".loading-ball");
const maskEl = loadingEl.querySelector(".mask");
const bgTextEl = loadingEl.querySelector(".background-text");
const fgTextEl = loadingEl.querySelector(".foreground-text");
const waveEl = loadingEl.querySelector(".wave");

const setPercent = (percent) => {
  maskEl.style["-webkit-mask-position-y"] = `${percent * 1.1 - 100}%`;
  bgTextEl.innerText = `${percent}%`;
  fgTextEl.innerText = `${percent}%`;
  waveEl.style.height = `${percent * 1.1}%`;
};

setPercent(5);

setTimeout(() => {
  setPercent(20);
}, 2000);

setTimeout(() => {
  setPercent(25);
}, 3000);

setTimeout(() => {
  setPercent(50);
}, 4000);

setTimeout(() => {
  setPercent(75);
}, 6000);

setTimeout(() => {
  setPercent(100);
}, 8000);
