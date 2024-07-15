// 1.사용자가 가위바위보를 클릭하면 게임이 시작된다.
// 2.사용자가 선택한 가위바위보 이미지를 보여준다.
// 3.컴퓨터가 가위바위보를 랜덤으로 선택한다.
// 4.컴퓨터가 선택한 가위바위보 이미지를 보여준다.
// 5.승패 여부를 구분하여 보여준다.
// 6.점수를 계산하여 출력한다.

document.querySelector("#scissors").onclick = function () {
  playGame("scissors");
};
document.querySelector("#rock").onclick = function () {
  playGame("rock");
};
document.querySelector("#paper").onclick = function () {
  playGame("paper");
};
let user_score = 0;
let computer_score = 0;
function playGame(user_choice) {
  console.log("사용자:" + user_choice);
  let user_choice_image = `<img src="images/${user_choice}.png" width=100 height=100>`;
  document.querySelector(".you>div:nth-child(2)").innerHTML = user_choice_image;

  let choice_list = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  let computer_choice = choice_list[idx];

  let computer_choice_image = `<img src="images/${computer_choice}.png" width=100 height=100>`;
  document.querySelector(".computer>div:nth-child(2)").innerHTML =
    computer_choice_image;
  console.log("컴퓨터:" + computer_choice);

  let user_win1 = user_choice == "rock" && computer_choice == "scissers";
  let user_win2 = user_choice == "scissers" && computer_choice == "paper";
  let user_win3 = user_choice == "paper" && computer_choice == "rock";
  let message;

  if (user_choice == computer_choice) {
    message = "무승부";
    text_color = "blue";
  } else if (user_win1 || user_win2 || user_win3) {
    message = "승리";
    text_color = "black";
    user_score++;
  } else {
    message = "패배";
    text_color = "red";
    computer_score++;
  }
  document.querySelector(".result-message").innerText = message;
  document.querySelector(".result-message").style.color = text_color;
  document.querySelector(".score>div:nth-child(1)").innerText = user_score;
  document.querySelector(".score>div:nth-child(3)").innerText = computer_score;
}

//.you>div:nth-child(2)
//.score>div:nthchild()
