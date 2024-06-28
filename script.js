let msg_inf = document.querySelector(".msg");
let restart = document.querySelector(".restart");
let boxes = document.querySelectorAll(".btn-ply");
let resetbtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg-container");

resetbtn.addEventListener("click", () => {
  location.reload();
});
restart.addEventListener("click", () => {
  location.reload();
});

let turn = 1;
boxes.forEach((box) => {
  let mark = () => {
    if (turn === 1) {
      box.innerText = "O";
      turn = 0;
    } else {
      box.innerText = "X";
      turn = 1;
    }
    box.disabled = true;
    logic1();
  };
  box.addEventListener("click", mark);
});
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
function logic1() {
  for (i = 0; i < 8; i++) {
    if (
      boxes[winPatterns[i][0]].innerText !== "" &&
      boxes[winPatterns[i][1]].innerText !== "" &&
      boxes[winPatterns[i][2]].innerText !== ""
    ) {
      if (
        boxes[winPatterns[i][0]].innerText ===
          boxes[winPatterns[i][1]].innerText &&
        boxes[winPatterns[i][1]].innerText ===
          boxes[winPatterns[i][2]].innerText
      ) {
        console.log(`${boxes[winPatterns[i][0]].innerText} is winner`);
        boxes.forEach((box) => {
          box.disabled = true;
        });
        msg.classList.remove("hide");

        msg_inf.innerText = `${boxes[winPatterns[i][0]].innerText} is winner`;
        restart.classList.remove("hide");
      }
    }
  }
}
