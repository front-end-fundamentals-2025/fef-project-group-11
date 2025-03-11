/*SHOPPING CART*/
const cartButtonElement = document.getElementById("cart-button");
const shoppingCartElement = document.getElementById("shopping-container");
const closeWindowElement = document.querySelector(".close-window-button");
/*ADDING TO CART BUTTON*/
const addToCartElement = document.querySelector(".add-to-cart");
const cartContainerElement = document.querySelector(".cart-container");
const inputElement = document.querySelector("#input");

/*LOCAL STORAGE*/
let cartElement = parseInt(localStorage.getItem("cartQuantity")) || 1;
inputElement.value = cartElement.toString();
let cartQuantity = cartElement;

inputElement.value = cartQuantity;

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

inputElement.value = cartQuantity.toString();

addToCartElement.addEventListener("click", function (event) {
  if (cartQuantity === 0) {
    cartQuantity = 1;
    localStorage.setItem("cartQuantity", cartQuantity);
  }
  cartContainerElement.style.display = "grid";
  shoppingCartElement.style.display = "grid";
  inputElement.value = cartQuantity;
});

/*ADDING AND REMOVING +/- */

const decrementElement = document.querySelector("#decrement");
const incrementElement = document.querySelector("#increment");

// let cartElement = 1;
// inputElement.value = cartElement.toString();
// console.log(inputElement.value);

decrementElement.addEventListener("click", function (event) {
  if (cartQuantity > 1 && cartContainerElement.style.display === "grid") {
    cartQuantity--;
    localStorage.setItem("cartQuantity", cartQuantity);
    inputElement.value = cartQuantity;
  } else {
    cartQuantity = 0;
    localStorage.removeItem("cartQuantity");
    shoppingCartElement.style.display = "none";
    cartContainerElement.style.display = "none";
  }
});

incrementElement.addEventListener("click", function (event) {
  cartQuantity++;
  localStorage.setItem("cartQuantity", cartQuantity);
  inputElement.value = cartQuantity;
});
