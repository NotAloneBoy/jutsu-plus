// Made by NotAloneBoy
// https://linktr.ee/notaloneboy


function checkAndSkipIntro() {
  const skipIntroButton = document.querySelector('div.vjs-overlay.vjs-overlay-bottom-left.vjs-overlay-skip-intro.vjs-overlay-background[title="Нажмите, если лень смотреть опенинг"]');
  const nextEpisodeButton = document.querySelector('div.vjs-overlay.vjs-overlay-bottom-right.vjs-overlay-skip-intro.vjs-overlay-background[title="Перейти к следующему эпизоду"]');

  if (skipIntroButton && !skipIntroButton.classList.contains('vjs-hidden')) {
    skipIntroButton.click();
  }

  if (nextEpisodeButton && !nextEpisodeButton.classList.contains('vjs-hidden')) {
    nextEpisodeButton.click();
  }
}

setInterval(checkAndSkipIntro, 1500);


