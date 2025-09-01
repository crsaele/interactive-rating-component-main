let numberContainer = document.querySelector(".number-container");
let submitBtn = document.querySelector("#submit-btn");
let ratingState = document.querySelector(".state");
let completedState = document.querySelector(".completed-state");
let rateResult = document.querySelector("#result");

numberContainer.addEventListener("click", (event) => {
  let numberSelected = event.target.innerText;
  rateResult.innerText = numberSelected;
  if (numberSelected != undefined) {
    submitBtn.addEventListener("click", () => {
      ratingState.style.display = "none";
      completedState.style.display = "flex";
    });
  }
});
