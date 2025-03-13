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

/*BIG SCREEN CART BUTTON*/

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

/*MOBILE CART BUTTON*/

const mobileCartButtonElement = document.getElementById("mobile-cart-button");

mobileCartButtonElement.addEventListener("click", function (event) {
  localStorage.setItem("cartQuantity", cartQuantity);
  inputElement.value = cartQuantity;
  if (
    shoppingCartElement.style.display === "none" ||
    shoppingCartElement.style.display === ""
  ) {
    shoppingCartElement.style.display = "grid";
  }
});

/*CLOSE WINDOW SHOPPING CONTAINER*/

closeWindowElement.addEventListener("click", function (event) {
  shoppingCartElement.style.display = "none";
});

inputElement.value = cartQuantity.toString();

/*ADDING AND REMOVING +/- */
/*TOTAL PRICE*/

const decrementElement = document.querySelector("#decrement");
const incrementElement = document.querySelector("#increment");
const totalPriceElement = document.querySelector("#input-price");

let pricePerItem = 199;
let pricePerItemElement = parseInt(localStorage.getItem("pricePerItem")) || 199;

decrementElement.addEventListener("click", function (event) {
  cartQuantity--;
  localStorage.setItem("cartQuantity", cartQuantity);
  localStorage.setItem("totalPrice", pricePerItem);
  inputElement.value = cartQuantity;
  totalPriceElement.value = cartQuantity * pricePerItem;
  if (cartQuantity < 1) {
    localStorage.removeItem("cartQuantity");
    localStorage.removeItem("pricePerItem");
    shoppingCartElement.style.display = "none";
    cartContainerElement.style.display = "none";
  }
});

incrementElement.addEventListener("click", function (event) {
  cartQuantity++;
  localStorage.setItem("cartQuantity", cartQuantity);
  localStorage.setItem("totalPrice", pricePerItem);
  inputElement.value = cartQuantity;
  totalPriceElement.value = cartQuantity * pricePerItem;
});

//First version

// decrementElement.addEventListener("click", function (event) {
//   cartQuantity--;
//   localStorage.setItem("cartQuantity", cartQuantity);
//   inputElement.value = cartQuantity;
//   if (cartQuantity < 1) {
//     shoppingCartElement.style.display = "none";
//     cartContainerElement.style.display = "none";
//     localStorage.removeItem("cartQuantity");
//   }
// });

// incrementElement.addEventListener("click", function (event) {
//   cartQuantity++;
//   localStorage.setItem("cartQuantity", cartQuantity);
//   inputElement.value = cartQuantity;
// });

/*HAMBURGER MENU OPEN/CLOSE*/

const hamburgerButtonElement = document.querySelector("#hamburger-button");
const hamburgerContainerElement = document.querySelector(
  ".hamburger-container"
);

hamburgerButtonElement.addEventListener("click", function (event) {
  if (hamburgerContainerElement.style.display === "none") {
    hamburgerContainerElement.style.display = "flex";
  } else {
    hamburgerContainerElement.style.display = "none";
  }
});
