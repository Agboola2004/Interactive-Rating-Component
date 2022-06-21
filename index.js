const start = document.querySelector(".start");
const end = document.querySelector(".thanks");
const result = document.querySelector(".result");
const btn = document.querySelectorAll("#btn");
const submit = document.getElementById("sub");

// You selected Add rating here   out of 5

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    result.innerHTML = "You selected " + e.target.innerHTML + " out of 5";
  });
});
submit.addEventListener("click", () => {
  end.style.display = "block";
  start.style.display = "none";
});
