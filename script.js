let navLink1 = document.getElementById('nav-link-1')
let navLink2 = document.getElementById('nav-link-2')
let navLink3 = document.getElementById('nav-link-3')
let heroTag = document.getElementById('hero-tag')

navLink1.textContent= "Let's Work Together";
navLink2.textContent= "Portfolio";
navLink3.textContent="Contact";

const myModal = document.getElementById('myModal^')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});