/*day cream detail html*/
const howToButtonElement = document.getElementsByClassName("info-button")[0];
const howToTextElement = document.getElementsByClassName("how-to-use")[0];
const howToPlusElement = document.getElementsByClassName("plus")[0];

// const ingredientsButtonElement =
//   document.getElementsByClassName("info-button")[0];
const ingredientsElement = document.getElementsByClassName("ingredients")[0];
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

howToButtonElement.addEventListener("click", function (event) {
  if (ingredientsElement.style.display === "none") {
    ingredientsElement.style.display = "block";
    howToPlusElement.innerText = "-";
  } else {
    ingredientsElement.style.display = "none";
    howToPlusElement.innerText = "+";
  }
});
