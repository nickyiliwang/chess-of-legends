// setup and config //////////////////////
// setup the board, and initiate a new board variable
// setup the game object from chess,js class
// create color variables for later use

// pregame start //////////////////////////
// Show modal title screen with title, game mode select buttons, faction selection and game start button.
// the mode selection would just be input radio styled
//
// players will have to pick an faction from a input type radio from an unordered list of 12 inputs representing each faction.
// when the user selected a mode and a faction, the start button will be enabled for the user to click start the game.
// in the backend, onClick each faction image will trigger the Piece Theme Function in the chessboardJS doc, and replace the default chess pieces png files in the default folder, with another folder with the selected faction png files.
// the faction and its rival faction will be preselected for simplicity sake. 3 pairs of rival factions will be selected.
// modal goes to display:block and fades away. The game begins.

// game start /////////////////////////////
// chess game rules and mechanics
// all move generation and rule keeping logic will be handled by chessJS, and communicated with chessboardJS via either the Forsyth–Edwards Notation(.fen()), or a position method provided by chessJS (.position()).

// Mouse Pickup and Drag Chess pieces
// upon picking up the a chess piece, do a check to see if the game is finished with chessJs method(game.game_over()), do not pick up pieces if the game is over, restrict picking the other side's chess pieces .if it's not that side's turn.

// Dropping Chess pieces onto the board
// once the user drops the chess pieces, chessJS needs to communicate and update chessboardJS with the position of the board
// example: board.position(game.fen()); passing in the fen position into the chessboardJS set position method board.position()
// with the from and to position for the the chessboardJS to have a record, incase of redoing a move
// this function also need to check if the pawn is by the end of the enemy board in order to get an promotion.
// If no moves are made, the chess snaps back to original position, and no updates are made.

// show possible moves on mouse hover on chess pieces
// highlight Possible Moves will this selects all the available squares on either side when its their turn, check for all the legal moves, and
// Upon Returning a list of legal moves from the current position.
// The function takes an optional parameter which controls the single-square move generation and verbosity(keeping a history of all moves made).
// Highlighting them with a for loop to mark each available moves with the color blackish grey.
// If no moves available just return nothing. This function will be fired upon mouse hover over chess pieces.
// Remove all highlights when the mouse hover away from he square, achieve this by remove the highlights by setting the background color empty

// Have a config object with all the configuration for the chessboardJS
// In the config object, there are position state, functions that describe onDragStart: what happens when a piece is picked up, dropped, mouse hovered, and mouse hovered away from.

// game ends and end screen modal ///////////
// check if the game has ended by the chessJS method game.game_over()
// un-hide(with display:block, visibility, or addClass) the winner the loser images covering the appropriate side
// 2 button will show up for the user to go back main screen or restart the game.
// if the user selects the restart button, hide all end screen assets, using the board.clear, and board.start methods, we can restart the game.
// else if the player clicks to go back to the main menu,  maybe destroy the board in the DOM element, and bring back the start menu.

// UI Design 
// Aprroach 1: To make this multi screen game flow easier to accomplish, a placeholder solution is to have multiple pages, but then the script will be weird to have them communicate with each other. Or I will take an addClass Remove class approach, with display: none and display: block approach. This is still a work in progress.
// Approach 2: header will host all the ui stuff and we will have a section for chess.

// player vs randomComputer
// simply put, the computer will get a list of all the possible/legal moves, and a randomized position generator will take all that data and randomly select a move and update the board with its decision. It may be a grandmaster move or most likely a move I would make.

// responsive
// using the .resize() method provided, we can resize the board to fit different media queries

// Stretch goals
// accessability
// adding music, animation, and character sounds
// fix bugs
// have more media queries for more responsiveness
