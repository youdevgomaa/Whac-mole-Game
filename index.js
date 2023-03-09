const CardsDisplay = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const time_left = document.getElementById("time-left");
const keyboard = document.addEventListener("keyup", (event) => {
  if (event.key == "Escape") {
    alert("You Pause The Game ,Press Ok to Resume If you want");
  }
});
let currentId;
alert("this is Whoc-game you have time and score let's start");

const RandomMole = () => {
  CardsDisplay.forEach((CardDisplay) => {
    CardDisplay.classList.remove("mole");
  });
  CardsDisplay[Math.floor(Math.random() * 9)].classList.add("mole");
};
setInterval(() => {
  RandomMole();
}, 1000);

const handleClick = () => {
  CardsDisplay.forEach((CardDisplay) => {
    CardDisplay.addEventListener("click", () => {
      if (currentId !== CardDisplay.id) {
        if (CardDisplay.classList.contains("mole")) {
          score.innerHTML = Number(score.innerHTML) + 1;
        }
      }
      currentId = CardDisplay.id;
    });
  });
};
handleClick();
setInterval(() => {
  if (time_left.innerHTML === "0") {
    alert(`Time finished Your Score is ${score.innerHTML}`);
    time_left.innerHTML = 60;
    window.location.reload();
  } else {
    time_left.innerHTML = Number(time_left.innerHTML) - 1;
  }
}, 1000);
