const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  // this.classList.toggle("flip");
  this.classList.add("flip");

  if (!cardIsFlipped) {
    // first click -> first- card
    cardIsFlipped = true;
    firstCard = this;
    return;
  }
  // second click -> second- card
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  // checking whether the cards match
  let isMatched = firstCard.dataset.name === secondCard.dataset.name;

  isMatched ? disableCards() : unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unFlipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1300);
}

function resetBoard() {
  [cardIsFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [nul, nul];
}

//IIFE
(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();
