let board = null;
const game = new Chess();
let whiteSquareHighlight = "#a9a9a9";
let blackSquareHighlight = "#696969";

const removeHighlights = function() {
  $("#board .square-55d63").css("background", "");
};

const highlightPossibleMoves = function(square) {
  // this selects all the available squares
  const allSquares = $("#board .square-" + square);
  let background = whiteSquareHighlight;

  if (allSquares.hasClass("black-3c85d") === true) {
    background = blackSquareHighlight;
  }

  allSquares.css("background", background);
};

const onDragStart = function(source, piece) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false;

  // or if it's not that side's turn
  if (
    (game.turn() === "w" && piece.search(/^b/) !== -1) ||
    (game.turn() === "b" && piece.search(/^w/) !== -1)
  ) {
    return false;
  }
};

const onDrop = function(source, target) {
  let move = game.move({
    from: source,
    to: target,
    promotion: "q" // only promotes to queen for pawns
  });

  removeHighlights();
  if (move === null) {
    return "snapback"; // return original position
  }
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

// end of hover effect

const onSnapEnd = function() {
  board.position(game.fen()); // when the snap end refresh board
};

const config = {
  position: "start",
  draggable: true,
  onDragStart: onDragStart, // Fires when a piece is picked up.
  onDrop: onDrop, // Fires when a piece is dropped.
  onSnapEnd: onSnapEnd, // Fires when the piece "snap" animation is complete.
  onMouseoverSquare: onMouseoverSquare, // Fires when the mouse leaves a square.
  onMouseoutSquare: onMouseoutSquare // Fires when the mouse leaves a square.
};

board = Chessboard("board", config);
