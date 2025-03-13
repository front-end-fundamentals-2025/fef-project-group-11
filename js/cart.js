/*SHOPPING CART*/
const cartButtonElement = document.getElementById("cart-button");
const shoppingCartElement = document.getElementById("shopping-container");
const closeWindowElement = document.querySelector(".close-window-button");
/*ADDING TO CART BUTTON*/

const cartContainerElement = document.querySelector(".cart-container");
const inputElement = document.querySelector("#input");

/*LOCAL STORAGE*/
let cartElement = parseInt(localStorage.getItem("cartQuantity")) || 0;
inputElement.value = cartElement.toString();
let cartQuantity = cartElement;

inputElement.value = cartQuantity;

cartButtonElement.addEventListener("click", function (event) {
  localStorage.setItem("cartQuantity", cartQuantity);
  inputElement.value = cartQuantity;
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

inputElement.value = cartQuantity.toString();

/*ADDING AND REMOVING +/- */

const decrementElement = document.querySelector("#decrement");
const incrementElement = document.querySelector("#increment");

decrementElement.addEventListener("click", function (event) {
  cartQuantity--;
  localStorage.setItem("cartQuantity", cartQuantity);
  inputElement.value = cartQuantity;
  if (cartQuantity < 1) {
    shoppingCartElement.style.display = "none";
    cartContainerElement.style.display = "none";
    localStorage.removeItem("cartQuantity");
  }
});

incrementElement.addEventListener("click", function (event) {
  cartQuantity++;
  localStorage.setItem("cartQuantity", cartQuantity);
  inputElement.value = cartQuantity;
});
