let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

document.querySelector(
  ".js-score"
).innerHTML = `Wins: ${score.wins} Losses: ${score.losses}`;

// if (!score) {
//   console.log(JSON.parse(localStorage.getItem("score")));
// }

function playGame(guess) {
  const randomNumber = Math.random();

  let result = randomNumber < 0.5 ? "heads" : "tails";

  if (guess === result) {
    score.wins += 1;
    document.querySelector(".js-result").innerHTML = "You win.";
    // console.log("You win.");
  } else if (guess !== result) {
    score.losses += 1;
    document.querySelector(".js-result").innerHTML = "You lose.";
    // console.log("You lose.");
  }

  localStorage.setItem("score", JSON.stringify(score));
  console.log(score);
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses}`;
}
