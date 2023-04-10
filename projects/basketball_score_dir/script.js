// Template to add event listeners to the buttons
// and to update the score

window.onload = main;

function main() {
  // Add event listener to the home button
  let pointadder_list = document.querySelectorAll(".point-adder-inner");
  // For loop to loop through the pointadder_list
  for (let i = 0; i < pointadder_list.length; i++) {
    pointadder = pointadder_list[i];
    pointadder.addEventListener("click", function () {
      home_score_board = document.getElementById("score-home");
      away_score_board = document.getElementById("score-away");
      valtype = this.getAttribute("valtype");
      numval = parseInt(this.getAttribute("numval"));

      // Get the current score
      if (valtype == "home") {
        current_score = parseInt(home_score_board.innerHTML);
        new_score = current_score + numval;
        home_score_board.innerHTML = new_score;
      } else if (valtype == "away") {
        current_score = parseInt(away_score_board.innerHTML);
        new_score = current_score + numval;
        away_score_board.innerHTML = new_score;
      }
    });
  }

  // Add event listener to the reset button
  let clear_score = document.getElementById("clear-score");
  clear_score.addEventListener("click", function () {
    home_score_board = document.getElementById("score-home");
    away_score_board = document.getElementById("score-away");
    home_score_board.innerHTML = 0;
    away_score_board.innerHTML = 0;
  });
}
