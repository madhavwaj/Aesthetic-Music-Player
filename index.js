var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var currentAudio = null;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  // Stop the currently playing audio if it exists
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  switch (key) {
    case "a":
      currentAudio = new Audio('sounds/bachna.mp3');
      currentAudio.play();
      break;

    case "b":
      currentAudio = new Audio('sounds/main agar.mp3');
      currentAudio.play();
      break;

    case "c":
      currentAudio = new Audio('sounds/sawre.mp3');
      currentAudio.play();
      break;

    case "d":
      currentAudio = new Audio('sounds/zara sa.mp3');
      currentAudio.play();
      break;

    case "e":
      currentAudio = new Audio('sounds/mi amor.mp3');
      currentAudio.play();
      break;

    case "f":
      currentAudio = new Audio('sounds/sun.mp3');
      currentAudio.play();
      break;

    case "g":
      currentAudio = new Audio('sounds/pungi.mp3');
      currentAudio.play();
      break;

    default:
      console.log("Invalid key: " + key);
  }
}
