/*shopping cart*/
const cartButtonElement = document.getElementById("cart-button");
const shoppingCartElement = document.getElementById("shopping-container");
const closeWindowElement = document.getElementsByClassName(
  "close-window-button"
);

cartButtonElement.addEventListener("click", function (event) {
  if (
    shoppingCartElement.style.display === "none" ||
    shoppingCartElement.style.display === ""
  ) {
    shoppingCartElement.style.display = "grid";
  }
});

closeWindowElement.addEventListener("click", function (event) {
  if (shoppingCartElement.style.display === "grid") {
    shoppingCartElement.style.display = "none";
  }
});
