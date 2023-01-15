let cardName = document.querySelector(".card-name");
let cardNumber = document.querySelector(".card-number");
let expDate = document.querySelector(".exp-date");
let cvc = document.querySelector(".cvc");

let cardNameInput = document.querySelector("#name");
let cardNumberInput = document.querySelector("#number");

// relié au input html avec l'attribut "onchange="exemple()""

updateCardsName = () => {
  cardName.innerHTML = cardNameInput.value;
};

updateCardsNumber = () => {
  cardNumber.innerHTML = cardNumberInput.value;
};
