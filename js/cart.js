/*shopping cart*/
const cartButtonElement = document.getElementById("cart-button");
const shoppingCartElement =
  document.getElementsByClassName("shopping-container");
cartButtonElement.addEventListener("click", function (event) {
  if (shoppingCartElement.style.display === "none") {
    shoppingCartElement.style.display = "grid";
  }
});
