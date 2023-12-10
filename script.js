const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const rating = document.querySelectorAll(".btn-num");
const submitBtn = document.querySelector(".submit-btn");
const number = document.querySelector(".num");

submitBtn.addEventListener("click", function () {
  container.classList.add("hidden");
  container2.classList.remove("hidden");
});

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    number.textContent = rating[i].innerHTML;
  });
}
