let drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
    let btn = drum[i].innerHTML;
    makeSound(btn);
    btnAnimation(btn);
  });
}
// let drum = document.querySelectorAll(".drum");
// for (let i = 0; i < drum.length; i++) {
//     drum[i].addEventListener("click", function () {
//     let btn = drum[i].innerHTML;
//     makeSound(btn);
//     btnAnimation(btn)
//   });
// }
// document.addEventListener("keypress", function (event) {
//   makeSound(event.key);
//   btnActive(event.key);
// });
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    btnAnimation(event.key);
  });
  
// function makeSound(key) {
//   switch (key) {
//     case "w":
//       let tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       let tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       let tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       let tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       let snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       let crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       let kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     default:
//       console.log(key);
//       break;
//   }
// }
function makeSound(key) {
    switch (key) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log(key);
        break;
    }
  }
// function btnActive(key){
//     let activeBtn = document.querySelector("." +key);
//     activeBtn.classList.add("pressed");
//     setTimeout(function(){
//         activeBtn.classList.remove("pressed");
//     }, 100)
// }

function btnAnimation(currentKey){
    let activeBtn = document.querySelector("." +currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100)
}
