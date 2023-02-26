let button = document.querySelectorAll('button');

// WHEN CLICK TO EACH BUTTON
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    makeSound(button[i].textContent); // -> button[i].textContent: Get each value like 'a', 'w' or 's'... is an argument when call 2 functions below
    addAction(button[i].textContent);
  }
}

//WHEN PRESS BUTTON 
window.addEventListener('keydown', function(press) {
  makeSound(press.key); // -> press.key is an argument return the value such as 'a' 'w' 'j'... when you press the keyboard 
  addAction(press.key); 
})

// 
function makeSound(character) {
  switch(character) {
    case 'w':
      let crash = new Audio('sounds/crash.mp3')
      crash.currentTime = 0; // CurrentTime = 0 will make it can be press consecutively. You can try to comment this line to see the difference without it 
      crash.play();
      break;
    case 'a':
      let kickBass = new Audio('sounds/kick-bass.mp3')
      kickBass.currentTime = 0;
      kickBass.play();
      break;
    case 's':
      let snare = new Audio('sounds/snare.mp3')
      snare.currentTime = 0;
      snare.play();
      break;
    case 'd':
      let tom1 = new Audio('sounds/tom-1.mp3')
      tom1.currentTime = 0;
      tom1.play();
      break;
    case 'j':
      let tom2 = new Audio('sounds/tom-2.mp3')
      tom2.currentTime = 0;
      tom2.play();
      break;
    case 'k':
      let tom3 = new Audio('sounds/tom-3.mp3')
      tom3.currentTime = 0;
      tom3.play();
      break;
    case 'l':
      let tom4 = new Audio('sounds/tom-4.mp3')
      tom4.currentTime = 0;
      tom4.play();
      break;                  
  }
}

function addAction(key) {
  let action = document.querySelector('.' + key); 
  action.classList.add('js-drum-active'); // add in a little bit animation when each Button is actived 
  setTimeout(function() {
    action.classList.remove('js-drum-active'); // Remove the animation after 0.05s by setTimeout 
  }, 50);
}


