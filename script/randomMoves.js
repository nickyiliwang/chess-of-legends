function makeRandomMove() {
  const possibleMoves = game.moves(); // a list of all legal moves

  // exit if the game is over
  if (game.game_over()) return;

  const randomIdx = Math.floor(Math.random() * possibleMoves.length); // random number generated from total amount of available moves 

  game.move(possibleMoves[randomIdx]); // using it to move 

  board.position(game.fen()); 

  window.setTimeout(makeRandomMove, 500);
}

const makeRandomMoveBtn = document.querySelector(".randomMovesBtn");

makeRandomMoveBtn.addEventListener("click", () => {
  window.setTimeout(makeRandomMove, 500);
});
