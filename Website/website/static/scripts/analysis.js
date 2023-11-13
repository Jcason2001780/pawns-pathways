var board = null;
var game = new Chess(); // Initialize the chess game logic
var isAnalysisMode = false; // Flag to indicate the current mode
var moveHistory = ['start']; // Start with the initial position
var currentMoveIndex = 0; // Start at the initial position
var selectedSquare = null; // Tracks the selected square for click-to-move

function onSquareClick(square) {
    if (selectedSquare) {
        var move = { from: selectedSquare, to: square, promotion: 'q' };
        if (isAnalysisMode) {
            onDrop(selectedSquare, square);
        } else {
            var result = game.move(move);
            if (result === null) return; // Illegal move
            moveHistory.push(game.fen());
            currentMoveIndex++;
            board.position(game.fen());
        }
        selectedSquare = null;
    } else if (board.position()[square]) {
        selectedSquare = square;
    }
}

function onDrop(source, target) {
    if (source === target) return 'snapback'; // Do nothing if dropped on the same square

    var move = { from: source, to: target, promotion: 'q' }; // Default to promoting to a queen
    if (isAnalysisMode) {
        board.move(source + "-" + target);
        moveHistory.push(board.fen()); // Store the board state in FEN format
        currentMoveIndex++;
    } else {
        var result = game.move(move);
        if (result === null) return 'snapback'; // Illegal move
        
        // Handle special moves like pawn promotion or en passant
        if (result.flags.includes("p") || result.flags.includes("e")) {
            board.position(game.fen());
        } else {
            board.position(game.fen()); // Update the board for all other moves
        }
        
        moveHistory.push(game.fen());
        currentMoveIndex++;
        updateStatus();
    }
    return true;
}

function undoMove() {
    if (currentMoveIndex <= 0) return; // No move to undo

    currentMoveIndex--;
    var fen = moveHistory[currentMoveIndex];
    
    if (isAnalysisMode) {
        board.position(fen); // Use Chessboard's position method to set the board
    } else {
        game.undo();
        board.position(fen); // Update the board to reflect the undone move
    }
}

function resetBoard() {
    board.start(); // Reset the board to the initial position
    moveHistory = ['start']; // Reset move history with the initial position
    currentMoveIndex = 0; // Reset the move index
    selectedSquare = null; // Clear the selected square
    game.reset(); // Reset the game state for regular mode
}

document.getElementById('modeToggleBtn').addEventListener('click', function() {
    isAnalysisMode = !isAnalysisMode; // Toggle the mode

    // Update button text based on the mode
    this.textContent = isAnalysisMode ? "Regular Mode" : "Analysis Mode";
});

function updateStatus() {
    // Update game status like check, checkmate, stalemate, etc.
    // This can be implemented as per your requirements
}

board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true,
    position: 'start',
    pieceTheme: '/static/images/game/{piece}.png',
    onDrop: onDrop,
    onSquareClick: onSquareClick
});

document.getElementById('undoBtn').addEventListener('click', undoMove);
document.getElementById('resetBtn').addEventListener('click', resetBoard);
