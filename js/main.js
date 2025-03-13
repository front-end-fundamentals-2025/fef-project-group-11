/*DAY DETAIL - OPEN/CLOSE HOW TO AND INGREDIENTS BUTTONS*/
const howToButtonElement = document.getElementsByClassName("info-button")[0];
const howToTextElement = document.getElementsByClassName("how-to-use")[0];
const howToPlusElement = document.getElementsByClassName("plus")[0];

// const ingredientsButtonElement =
//   document.getElementsByClassName("info-button")[0];
// const ingredientsPlusElement = document.getElementsByClassName("plus")[0];

howToButtonElement.addEventListener("click", function (event) {
  if (howToTextElement.style.display === "none") {
    howToTextElement.style.display = "block";
    howToPlusElement.innerText = "-";
  } else {
    howToTextElement.style.display = "none";
    howToPlusElement.innerText = "+";
  }
});

const ingredientsButtonElement = document.querySelector("#ingredients-button");
const ingredientsTextElement = document.querySelector(".ingredients");
const ingredientsPlusElement = document.querySelector("#plus-id");

ingredientsButtonElement.addEventListener("click", function (event) {
  if (ingredientsTextElement.style.display === "none") {
    ingredientsTextElement.style.display = "block";
    ingredientsPlusElement.innerText = "-";
  } else {
    ingredientsTextElement.style.display = "none";
    ingredientsPlusElement.innerText = "+";
  }
});

const addToCartElement = document.querySelector(".add-to-cart");

addToCartElement.addEventListener("click", function (event) {
  cartQuantity++;
  localStorage.setItem("cartQuantity", cartQuantity);
  cartContainerElement.style.display = "grid";
  shoppingCartElement.style.display = "grid";
  inputElement.value = cartQuantity;
});
