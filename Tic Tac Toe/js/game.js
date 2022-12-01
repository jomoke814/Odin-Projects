const cellElements = document.querySelectorAll('[data-cell]');
const gameBoard = document.querySelector('.game-board');
const x_Mark = 'x'
const circle_Mark = 'circle'
let circleTurn


let gameBoardModule = (function () {
    // let gameBoard = [];
    
    return {};
})();
//this a module
let displayControlModule = (function () {
    function startGame() {

        //adding click event for gameBoard
        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, {once: true})
        })
        setBoardHover()
    }

    //adding mark from browser
    function handleClick(e) {
    const cell = e.target
    const currentMark = circleTurn ? circle_Mark : x_Mark
    makeMaker(cell, currentMark)
    // check winner
    //check for draw
    // switch turns
    switchTurns()
    setBoardHover()
    }
    return{startGame, handleClick};
})();
displayControlModule.startGame()

function createPlayer(Player1, Player2) {
    let getPlayerName = () => {}
    return {getPlayerName, Player1, Player2}
}

//add a mark o or x
function makeMaker(cell, currentMark) {
    cell.classList.add(currentMark)
}

// switch turn to x or x
function switchTurns() {
    circleTurn = !circleTurn
}

//adding hover effects gameBoard
function setBoardHover() {
    gameBoard.classList.remove(x_Mark)
    gameBoard.classList.remove(circle_Mark)
    if(circleTurn) {
        gameBoard.classList.add(circle_Mark)
    } else {
        gameBoard.classList.add(x_Mark)
    }
}
