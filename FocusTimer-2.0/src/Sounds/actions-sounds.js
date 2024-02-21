import * as sounds from "./sounds.js";
import state from "./state-sounds.js";

export function tree() {
  state.isMute = document.getElementById('tree').classList.toggle('active')
  if (state.isMute) {
    sounds.buttonTree.play()
  } else {
    sounds.buttonTree.pause()
  }
};

export function rain() {
  state.isMute = document.getElementById('rain').classList.toggle('active')
  if (state.isMute) {
    sounds.buttonRain.play()
  } else {
    sounds.buttonRain.pause()
  }
};

export function coffeeShop() {
  state.isMute = document.getElementById('coffee-shop').classList.toggle('active')
  if (state.isMute) {
    sounds.buttonCoffeShop.play()
  } else {
    sounds.buttonCoffeShop.pause()
  }
};

export function fire() {
  state.isMute = document.getElementById('fire').classList.toggle('active')
  if (state.isMute) {
    sounds.buttonFire.play()
  } else {
    sounds.buttonFire.pause()
  }
};