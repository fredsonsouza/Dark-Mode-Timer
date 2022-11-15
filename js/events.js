import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonForestActive,
  buttonForestNotActive,
  buttonRainActive,
  buttonRainNotActive,
  buttonCoffeeActive,
  buttonCoffeeNotActive,
  buttonFireplaceActive,
  buttonFireplaceNotActive,
  buttonMinus,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
  buttonLight,
  buttonDark,
  volForest,
  volRain,
  volCoffee,
  volFireplace,
} from "./elements.js";
import sounds from "./sounds.js";

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    sound.pressButton();
    timer.countDown();
  });
  buttonPause.addEventListener("click", function () {
    controls.pause();
    sound.pressButton();
    timer.hold();
  });
  buttonStop.addEventListener("click", function () {
    controls.reset();
    sound.pressButton();
    sound.rainAudio.pause();
    sound.forestAudio.pause();
    sound.coffeeAudio.pause();
    sound.fireplaceAudio.pause();
    timer.reset();
  });

  buttonLight.addEventListener("click", function () {
    buttonLight.classList.add("hide");
    buttonDark.classList.remove("hide");
  });
  buttonDark.addEventListener("click", function () {
    buttonDark.classList.add("hide");
    buttonLight.classList.remove("hide");
  });

  buttonForestNotActive.addEventListener("click", function () {
    buttonForestActive.classList.remove("hide");
    buttonForestNotActive.classList.add("hide");
    buttonRainActive.classList.add("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    buttonForestActive.classList.add("inputActive");
    sound.forestAudio.play();
    sound.rainAudio.pause();
    sound.coffeeAudio.pause();
    sound.fireplaceAudio.pause();
  });

  volForest.addEventListener("input", function () {
    sound.adjustVolume(sound.forestAudio, volForest.value);
  });
  buttonRainNotActive.addEventListener("click", function () {
    buttonRainActive.classList.remove("hide");
    buttonRainNotActive.classList.add("hide");
    buttonForestActive.classList.add("hide");
    buttonForestNotActive.classList.remove("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    buttonRainActive.classList.add("inputActive");
    sound.rainAudio.play();
    sound.forestAudio.pause();
    sound.coffeeAudio.pause();
    sound.fireplaceAudio.pause();
  });

  volRain.addEventListener("input", function () {
    sound.adjustVolume(sound.rainAudio, volRain.value);
  });

  buttonCoffeeNotActive.addEventListener("click", function () {
    buttonCoffeeActive.classList.remove("hide");
    buttonCoffeeNotActive.classList.add("hide");
    buttonForestActive.classList.add("hide");
    buttonForestNotActive.classList.remove("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonRainActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    buttonCoffeeActive.classList.add("inputActive");

    sound.coffeeAudio.play();
    sound.forestAudio.pause();
    sound.rainAudio.pause();
    sound.fireplaceAudio.pause();
  });

  volCoffee.addEventListener("input", function () {
    sound.adjustVolume(sound.coffeeAudio, volCoffee.value);
  });

  buttonFireplaceNotActive.addEventListener("click", function () {
    buttonFireplaceActive.classList.remove("hide");
    buttonFireplaceNotActive.classList.add("hide");
    buttonForestActive.classList.add("hide");
    buttonForestNotActive.classList.remove("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonRainActive.classList.add("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");

    buttonFireplaceActive.classList.add("inputActive");

    sound.fireplaceAudio.play();
    sound.forestAudio.pause();
    sound.coffeeAudio.pause();
    sound.rainAudio.pause();
  });

  volFireplace.addEventListener("input", function () {
    sound.adjustVolume(sound.fireplaceAudio, volFireplace.value);
  });
  buttonPlus.addEventListener("click", function () {
    minutesDisplay.textContent = String(
      parseInt(minutesDisplay.textContent) + 5
    ).padStart(2, "0");
  });

  buttonMinus.addEventListener("click", function () {
    if (minutesDisplay.textContent > 5) {
      minutesDisplay.textContent = String(
        parseInt(minutesDisplay.textContent) - 5
      ).padStart(2, "0");
    }
  });
}
