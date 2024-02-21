const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
  window.alert("Hallo World");
}

function showConfirm() {
  if (window.confirm("will 2 button show in pop-up")) {
    confirm.innerText = "User Clicked OK button.";
  } else {
    confirm.innerText = "User Clicked CANCEl button";
  }
}

function showPrompt() {
  let person = window.prompt("Please Enter Your Name:", "Harry potter");
  let txt;

  if (person === null || person === "") {
    txt = "users cancelled the prompt";
  } else {
    txt = "Welcome "+ person;
  }

  prompt.innerText=txt;

}
