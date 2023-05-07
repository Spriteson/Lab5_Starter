// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const img    = document.querySelector('img');
  const text   = document.querySelector('#text-to-speak');
  const select = document.querySelector('#voice-select');
  const button = document.querySelector('button');
  const synth  = window.speechSynthesis;
  let voices;


  //variable.onEvent = () => {...}
  //variable.addEventListener('Event', function(){....});
 
  // dynamically update a list of available voices in a web
  synth.addEventListener('voiceschanged',function(){
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices.default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }

  });
  

  button.addEventListener('click', function(){
    const utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = voices[select.selectedIndex - 1];
    utterThis.addEventListener('start',function(){
      img.src = `assets/images/smiling-open.png`;
    });
    //When end speaking
    utterThis.addEventListener('end',function(){
      img.src = `assets/images/smiling.png`;
    });
    //start speaking
    synth.speak(utterThis);
  });

}