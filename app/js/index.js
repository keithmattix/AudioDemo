const electron = require('electron');
const $ = require('jquery');
const remote = electron.remote;

$(document).ready(() => {
  const audio = new Audio(remote.getCurrentWindow().audioUrl);
  audio.currentTime = 0;
  audio.play();
  $('#raiseVolume').on('click', () => {
    audio.volume += audio.volume >= 1 ? 0 : 0.1;
  });
  $('#lowerVolume').on('click', () => {
    audio.volume -= audio.volume <= 0 ? 0 : 0.1;
  });
});
