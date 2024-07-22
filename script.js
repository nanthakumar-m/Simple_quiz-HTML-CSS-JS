const options = document.querySelectorAll(".option");
options.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedAnswer = option.getAttribute("data-answer");
    const correctAnswer = "D";
    if (selectedAnswer === correctAnswer) {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }
    options.forEach((opt) => {
      opt.classList.add("disabled");
      opt.style.pointerEvents = "none";
    });
  });
});
