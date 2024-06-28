document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.querySelector('.gameboard');
    const message = document.getElementById('.message')
    const restartButton = document.getElementById('.restartButton')
    let treasureIndex;
    const gridSize = 25; 


    function initializeGame() {
    gameBoard.innerHTML = '';
    treasureIndex = Math.floor(Math.random() * gridSize);
    MessageChannel.textContent = '';
    createBoard();
}


function createBoard() {
for (let i = 0; i <gridSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', handleCellClick);
  gameBoard.appendChild(cell) ; 
}
}



function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = parseInt(cell.dataset.index);


    if (cell.classList.contains('clicked')) return;


    cell.classList('clicked');


    if (cellIndex === treasureIndex) { 
    MessageChannel.textContent = 'Parabéns! Voce Encontrou o tesouro!';
    MessageChannel.style.color = 'green';
    revealTreasure();
    } else {
message.textContent = 'Continue procurando...';
message.style.color =  'blue';
    }
}



function revealTreasure(){
const cells = document.querySelectorAll('.cell');
cells[treasureIndex].textContent = '💰';
cells.forEach(cell => cell.removeEventListener('click', handlerCellClick));
}


restartButton.addEventListener('click', initializeGame);


initializeGame();
});