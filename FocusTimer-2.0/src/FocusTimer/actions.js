import state from "./state.js";
import * as timer from "./timer.js";
import * as sound from "./sound-buttons.js";
import * as el from "./elements.js";

export function play() {
  state.isRunning = true;
  timer.countdown();
  sound.btnPress.play()
};

export function reset() {
  state.isRunning = false;
  timer.updateDisplay();
  sound.btnPress.play();
};

export function plus() {
  if (state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent) + 5

  if (minutes > 60) {
    minutes = 60
  }
  timer.updateDisplay(minutes)
  state.minutes = minutes
};

export function minus() {
  if (state.isRunning) {
    return;
  };

  let minutes = Number(el.minutes.textContent) - 5;

  if (minutes < 0) {
    minutes = 0;
  };
  timer.updateDisplay(minutes);
  state.minutes = minutes
};