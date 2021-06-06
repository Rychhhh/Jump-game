var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 200);
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("Top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over, score : " + Math.floor(score / 100));
    score = 0;
    block.style.animation = "block is infinite linear";
  } else {
    score++;
    document.getElementById("uScore").innerHTML = Math.floor(score / 100);
  }
}, 10);
