const cellElements = document.querySelectorAll('[data-cell]')
const x_Mark = 'x'
const circle_Mark = 'circle'
let circleTurn


let gameBoardModule = (function () {
    let gameBoard = [];
    return {};
})();

let displayControlModule = (function () {
    let test = () => {console.log('Testing! Testing the Function')}
    return{test};
})();

function createPlayer(Player1, Player2) {
    let getPlayerName = () => {}
    return {getPlayerName, Player1, Player2}
}

//adding click event for gameBoard
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

//adding mark from browser
function handleClick(e) {
    const cell = e.target
    const currentMark = circleTurn ? circle_Mark : x_Mark
    makeMaker(cell, currentMark)
    // check winner
    //check for draw
    // switch turns
    switchTurns()
}

//add a mark o or x
function makeMaker(cell, currentMark) {
    cell.classList.add(currentMark)
}

// switch turn to x or x
function switchTurns() {
    circleTurn = !circleTurn
}