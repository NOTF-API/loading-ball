export class LoadingBall {
  constructor(config) {
    const defaultConfig = {
      target: document.body,
      width: 100,
      fontSize: 20,
      backgroundColor: "#eaf7ff",
      backgroundTextColor: "#1f232c",
      foregroundTextColor: "#ffffff",
    };
    LoadingBall.#configValidCheck(config);
    this.progress = 0;
    this.config = Object.assign({}, defaultConfig, config);
    this.#initElement();
  }

  static #configValidCheck(config) {
    if (
      config.target !== undefined &&
      !(config.target instanceof HTMLElement)
    ) {
      LoadingBall.#errorAndExit(
        "config.target should be instanceof HTMLElement"
      );
    }
    if (
      config.width !== undefined &&
      (!(typeof config.width === "number") || config.width <= 0)
    ) {
      LoadingBall.#errorAndExit("config.width should be a positive number");
    }
    if (
      config.fontSize !== undefined &&
      (!(typeof config.fontSize === "number") || config.fontSize <= 0)
    ) {
      LoadingBall.#errorAndExit("config.width should be a positive number");
    }
  }

  static #errorAndExit(message) {
    throw new Error(`LoadingBall: ${message}`);
  }

  #initElement() {
    const loadingBallEl = document.createElement("div");
    loadingBallEl.className = "loading-ball";
    const backgroundTextEl = document.createElement("div");
    backgroundTextEl.className = "background-text";
    const maskEl = document.createElement("div");
    maskEl.className = "mask";
    const foregroundTextEl = document.createElement("div");
    foregroundTextEl.className = "foreground-text";
    const waveEl = document.createElement("div");
    waveEl.className = "wave";
    maskEl.appendChild(foregroundTextEl);
    maskEl.appendChild(waveEl);
    loadingBallEl.appendChild(backgroundTextEl);
    loadingBallEl.appendChild(maskEl);
    this.elements = {
      loadingBallEl,
      backgroundTextEl,
      maskEl,
      foregroundTextEl,
      waveEl,
    };
    loadingBallEl.style.backgroundColor = this.config.backgroundColor;
    loadingBallEl.style.width = `${this.config.width}px`;
    loadingBallEl.style.height = `${this.config.width}px`;
    backgroundTextEl.style.fontSize = `${this.config.fontSize}px`;
    backgroundTextEl.style.color = this.config.backgroundTextColor;
    backgroundTextEl.innerText = "0%";
    foregroundTextEl.style.fontSize = `${this.config.fontSize}px`;
    foregroundTextEl.style.color = this.config.foregroundTextColor;
    maskEl.style["-webkit-mask-position-y"] = `-100%`;
    this.config.target.appendChild(loadingBallEl);
  }

  #setElementStatus() {
    const progress = this.progress;
    const { backgroundTextEl, maskEl, foregroundTextEl, waveEl } =
      this.elements;
    backgroundTextEl.innerText = `${progress}%`;
    foregroundTextEl.innerText = `${progress}%`;
    maskEl.style["-webkit-mask-position-y"] = `${progress * 1.1 - 100}%`;
    waveEl.style.height = `${progress * 1.1}%`;
  }

  to(progress) {
    if (!(progress >= 0 && progress <= 100)) {
      console.warn("LoadingBall: progress should be in [0,100]");
      return;
    }
    this.progress = progress;
    this.#setElementStatus();
  }
}
