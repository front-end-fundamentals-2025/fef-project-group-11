/*Shopping cart*/
const cartButtonElement = document.getElementById("cart-button");
const shoppingCartElement = document.getElementById("shopping-container");
const closeWindowElement = document.querySelector(".close-window-button");

cartButtonElement.addEventListener("click", function (event) {
  if (
    shoppingCartElement.style.display === "none" ||
    shoppingCartElement.style.display === ""
  ) {
    shoppingCartElement.style.display = "grid";
  }
});

closeWindowElement.addEventListener("click", function (event) {
  shoppingCartElement.style.display = "none";
});

/*Adding to cart*/
const addToCartElement = document.querySelector(".add-to-cart");
const cartContainerElement = document.querySelector(".cart-container");

addToCartElement.addEventListener("click", function (event) {
  cartContainerElement.style.display = "grid";
  shoppingCartElement.style.display = "grid";
});

const decrementElement = document.querySelector("#decrement");
const incrementElement = document.querySelector("#increment");
var inputElement = document.querySelector("#input");
let cartElement = 1;
inputElement.value = cartElement.toString();
console.log(inputElement.value);

decrementElement.addEventListener("click", function (event) {
  if (
    cartContainerElement.style.display === "grid" &&
    inputElement.value === "1"
  ) {
    shoppingCartElement.style.display = "none";
  } else {
    inputElement.value--;
  }
});

incrementElement.addEventListener("click", function (event) {
  inputElement.value++;
});
