// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //var img = document.getElementById("horn-select");
  //img.src = "../images/air-horn.png";
  const img = document.querySelector("#horn-select");
  //let volume = document.querySelector("#volume").value;
  let slider = document.querySelector("#volume");
  let vImg = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();

  //change img in the meddle
  img.addEventListener('change',function() {
    let option = img.value;
    if (option == "air-horn"){
      document.querySelector('img').src = 'assets/images/air-horn.svg';
      document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
    }
    else if (option == "car-horn"){
      document.querySelector('img').src = 'assets/images/car-horn.svg';
      document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
    }
    else if (option == "party-horn"){
      document.querySelector('img').src = 'assets/images/party-horn.svg';
      document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
    }
    else{
      document.querySelector('img').src = 'assets/images/no-image.png';
    }
  });

  //change volume img and music volume with volume change
  slider.addEventListener('change',function() {
    let volume = slider.value;
    if (volume == 0){
      vImg.src = 'assets/icons/volume-level-0.svg';
      music.volume = 0;
    }
    else if (volume < 33){
      vImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume < 67){
      vImg.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      vImg.src = 'assets/icons/volume-level-3.svg';
    }

    let music = document.querySelector('audio')
    music.volume = volume / 100
  });
  
  //paly sound
  const sound = document.querySelector("button");
  sound.addEventListener('click',function() {
    let option = img.value;
    let music = document.querySelector('audio')
    music.play();
    if (option == "party-horn"){
      jsConfetti.addConfetti();
    }
  });
  
  

  




}