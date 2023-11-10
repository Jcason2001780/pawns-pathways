var board = null;
var moveHistory = [];
var currentMoveIndex = -1;
var selectedSquare = null; // New variable to track selected square

function onSquareClick(square) {
  if (selectedSquare) {
    // If a piece is already selected, attempt to move it to the clicked square
    onDrop(selectedSquare, square, board.position()[selectedSquare]);
    selectedSquare = null; // Deselect the piece after moving
  } else if (board.position()[square]) {
    // If no piece is selected and the clicked square has a piece, select it
    selectedSquare = square;
  }
}

function onDrop(source, target, piece) {
  if (source === target) return; // Do nothing if dropped on the same square
  moveHistory.splice(currentMoveIndex + 1, moveHistory.length - currentMoveIndex - 1);
  moveHistory.push({ from: source, to: target, piece: piece });
  currentMoveIndex++;
  board.position(board.fen()); // Update board position to reflect the move
  return true;
}

function undoMove() {
  if (currentMoveIndex < 0) return; // No move to undo
  var move = moveHistory[currentMoveIndex];
  board.move(move.to + '-' + move.from); // Move piece back to original position
  currentMoveIndex--;
}

function redoMove() {
  if (currentMoveIndex >= moveHistory.length - 1) return; // No move to redo
  currentMoveIndex++;
  var move = moveHistory[currentMoveIndex];
  board.move(move.from + '-' + move.to); // Reapply the move
}

function resetBoard() {
  board.start(); // Resets to the initial position
  moveHistory = [];
  currentMoveIndex = -1;
}

board = Chessboard('board', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true,
  position: 'start',
  pieceTheme: '/static/images/game/{piece}.png',
  onDrop: onDrop
});

// Bind buttons to their respective functions
document.getElementById('undoBtn').addEventListener('click', undoMove);
document.getElementById('redoBtn').addEventListener('click', redoMove);
document.getElementById('resetBtn').addEventListener('click', resetBoard);