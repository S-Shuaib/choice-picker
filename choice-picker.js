const textArea = document.querySelector("#textarea");
const choicesDiv = document.querySelector(".choices-div");

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  choicesDiv.innerHTML = "";
  tags.forEach((tag) => {
    const choicePTag = document.createElement("p");
    choicePTag.classList.add("choice");
    choicePTag.innerText = tag;
    choicesDiv.appendChild(choicePTag);
  });
};

const pickRandomChoice = () => {
  const choices = document.querySelectorAll(".choice");
  const choiceChosen = choices[Math.floor(Math.random() * choices.length)];
  return choiceChosen.classList.add("chosen");
};

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    pickRandomChoice();
  }
});
