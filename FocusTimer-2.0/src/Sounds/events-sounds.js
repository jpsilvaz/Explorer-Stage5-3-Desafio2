import { controlsSounds } from "./elements-sounds.js";
import * as actionSounds from "./actions-sounds.js";

export function registerSounds() {
  controlsSounds.addEventListener('click', event => {
    const sound = event.target.dataset.sound;

    if (typeof actionSounds[sound] != 'function') {
      return;
    };

    actionSounds[sound]();
  });
};