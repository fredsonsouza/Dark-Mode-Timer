export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  );

  const forestAudio = new Audio(
    "https://github.com/Fredson23/sounds-cursos/blob/main/Floresta.wav?raw=true"
  );
  const rainAudio = new Audio(
    "https://github.com/Fredson23/sounds-cursos/blob/main/Chuva.wav?raw=true"
  );

  const coffeeAudio = new Audio(
    "https://github.com/Fredson23/sounds-cursos/blob/main/Cafeteria.wav?raw=true"
  );

  const fireplaceAudio = new Audio(
    "https://github.com/Fredson23/sounds-cursos/blob/main/Lareira.wav?raw=true"
  );

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeAudio.loop = true;
  fireplaceAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }
  function pressForest() {
    forestAudio.play();
  }
  function pressRain() {
    forestAudio.play();
  }
  function pressCoffee() {
    coffeeAudio.play();
  }
  function pressFireplace() {
    fireplaceAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }
  function adjustVolume(sound, volume) {
    sound.volume = volume;
  }

  return {
    pressButton,
    pressForest,
    pressRain,
    pressCoffee,
    pressFireplace,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireplaceAudio,
    timeEnd,
    bgAudio,
    adjustVolume,
  };
}
