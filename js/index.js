const notification = document.getElementById("notification");
const form = document.getElementById("number-form");
form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const number = data.get("number");

  displayNotification(`You submitted the number ${number}`);
}

function displayNotification(text) {
  notification.innerText = text;
  notification.style.display = "block";
  notification.classList.remove("slide-up");
  notification.classList.add("slide-down");
  setTimeout(() => {
    notification.classList.remove("slide-down");
    notification.classList.add("slide-up");
  }, 3000);
}
