let board = null;
const game = new Chess();

// const chess = new Chess();

// while (!chess.game_over()) {
//   const moves = chess.moves();
//   const move = moves[Math.floor(Math.random() * moves.length)];
//   chess.move(move);
// }
// console.log(chess.pgn());

var onDrop = function(source, target) {
  var move = game.move({
    from: source,
    to: target,
    promotion: "q" // why do you need a promotion
  });

  removeHighlights();
  if (move === null) {
    return "snapback"; // return original position
  }
};

var onSnapEnd = function() {
  board.position(game.fen()); // when the snap end refresh board 
};

// this creates the hover effect
// Returns a list of legal moves from the current position. The function takes an optional parameter which controls the single-square move generation and verbosity.
const onMouseoverSquare = function(square, piece) {
  let moves = game.moves({
    square: square,
    verbose: true // this keeps the history moves
  });

  // if no moves available just return nothing
  if (moves.length === 0) return;

  // highlightPossibleMoves
  highlightPossibleMoves(square);

  // this for loop is moving all the square highlights to match possible moves
  for (let i = 0; i < moves.length; i++) {
    highlightPossibleMoves(moves[i].to);
  }
};

const onMouseoutSquare = function(square, piece) {
  removeHighlights(); // fires when mouse leaves square
};

const removeHighlights = function() {
  $("#board .square-55d63").css("background", "");
};

const highlightPossibleMoves = function(square) {
  // this selects all the available squares
  const squareEl = $("#board .square-" + square);

  const background = "#a9a9a9"; // default color

  // QUESTION: Why did he select all the moves with black colors a a class, when we are trying to show possible moves for white pieces.
  if (squareEl.hasClass("black-3c85d") === true) {
    background = "#696969";
  }

  squareEl.css("background", background);
};
// end of hover effect

const config = {
  position: "start",
  draggable: true,
  onDrop: onDrop, // Fires when a piece is dropped.
  onSnapEnd: onSnapEnd, // Fires when the piece "snap" animation is complete.
  onMouseoverSquare: onMouseoverSquare, // Fires when the mouse leaves a square.
  onMouseoutSquare: onMouseoutSquare // Fires when the mouse leaves a square.
};

board = Chessboard("board", config);
