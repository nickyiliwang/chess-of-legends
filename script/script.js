let board = null;
const game = new Chess();

const config = {
  position: "start",
  draggable: true
};

board = Chessboard("board1", config);

// var chess = new Chess();

// while (!chess.game_over()) {
//   var moves = chess.moves();
//   var move = moves[Math.floor(Math.random() * moves.length)];
//   chess.move(move);
// }
// console.log(chess.pgn());
