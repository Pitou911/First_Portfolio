const submitButton = document.querySelector(".submit-btn");
const nameInput = document.querySelectorAll(".text-input");
const messengeSent = document.querySelector(".message-sent");

submitButton.addEventListener("click", function () {
  for (let i = 0; i < nameInput.length; i++) {
    if (nameInput[i].value === "") {
      messengeSent.textContent = "* Please fill all the input *";
      messengeSent.classList.add("text-danger");
    } else {
      nameInput[i].value = "";
      messengeSent.textContent = "* Message Sent *";
    }
  }
});
