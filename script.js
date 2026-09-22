let treats = 0;

const counter = document.getElementById("counter");
const button = document.getElementById("cookieBtn");

button.addEventListener("click", function() {
 treats = treats + clickPower;
 counter.textContent =
 "Treats are currently: " + treats;
});

let clickPower = 1;
const multiplierBtn = document.getElementById("multiplierBtn");

multiplierBtn.addEventListener("click", function() {
   if (treats >= 5) {
   treats = treats - 5;
       clickPower = clickPower + 1;
       counter.textContent ="Treats are currently: " + treats;
   }
});
