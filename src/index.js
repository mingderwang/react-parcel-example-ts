console.log("js, ming 🌞");
// grep everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");
console.log("js, ming 🌞", sidebar);
// add our event listener for the click
btn.addEventListener("click", function () {
  console.log("click ...");
  sidebar.classList.toggle("-translate-x-full");
});
