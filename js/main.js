/*day cream detail html*/
const howToButtonElement = document.getElementsByClassName("how-to-button")[0];
const howToTextElement = document.getElementsByClassName("how-to-use")[0];
const howToPlusElement = document.getElementsByClassName("how-to-plus")[0];
const ingredientsButtonElement =
  document.getElementsByClassName("ingredients-button")[0];
const ingredientsElement = document.getElementsByClassName("ingredients")[0];
const ingredientsPlusElement =
  document.getElementsByClassName("ingredients-plus")[0];

howToButtonElement.addEventListener("click", function (event) {
  if (howToTextElement.style.display === "none") {
    howToTextElement.style.display = "block";
    howToPlusElement.innerText = "-";
  } else {
    howToTextElement.style.display = "none";
    howToPlusElement.innerText = "+";
  }
});

ingredientsButtonElement.addEventListener("click", function (event) {
  if (ingredientsElement.style.display === "none") {
    ingredientsElement.style.display = "block";
    ingredientsPlusElement.innerText = "-";
  } else {
    ingredientsElement.style.display = "none";
    ingredientsPlusElement.innerText = "+";
  }
});

/*shopping cart*/
const cartButtonElement = document.getElementsByClassName("cart-button")[0];
const shoppingCartElement =
  document.getElementsByClassName("shopping-container")[0];
const hiddenElement = document.getElementsById("hidden");

cartButtonElement.addEventListener("click", function (event) {
  if (hiddenElement.style.display === "none") {
    shoppingCartElement.style.display = "block";
  } else {
    shoppingCartElement.style.display = "none";
  }
});
