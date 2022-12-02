const cellElements = document.querySelectorAll('[data-cell]');
const gameBoard = document.querySelector('.game-board');
const startButton = document.querySelector('.start')
const x_Mark = 'x'
const circle_Mark = 'circle'
let circleTurn


//Creating players
let createPlayer = () => {
    for(let i = 0; i < 4; i++) {
        if(gameBoardModule.playerArray.length >= 0) {
            gameBoardModule.makePlayerMove();
            break;
        }else if(gameBoardModule.playerArray.length == 0) {
            let playerName = prompt("Whats your name Player1?");
            if(playerName == '' || playerName == null) {
                alert("Sorry, Name cannot be blank!");
                continue;
            }

            let playerNumber = 1;
            let assignSymbol = x_Mark;
            alert("Your player1 assigned X");
            gameBoardModule.playerArray.push(playerName,playerNumber,assignSymbol);
        }else if(gameBoardModule.playerArray.length !== 0 ) {
            let playerName = prompt("Whats your name Player2?");
            if(playerName == '' || playerName == null) {
                alert("Sorry, Name cannot be blank!");
                continue;
            }

            let playerNumber = 2;
            let assignSymbol = circle_Mark;
            alert("Your player1 assigned circle");
            gameBoardModule.playerArray.push(playerName,playerNumber,assignSymbol);
        }
    }
};

let gameBoardModule = (function () {
    // let gameBoard = [];
    
    return {};
})();

//adding hover effects gameBoard
const setBoardHover = () => {
    gameBoard.classList.remove(x_Mark)
    gameBoard.classList.remove(circle_Mark)
    if(circleTurn) {
        gameBoard.classList.add(circle_Mark)
    } else {
        gameBoard.classList.add(x_Mark)
    }
};

//this a module
let displayControlModule = (function () {
    const startHover = () => {
        circleTurn = false
        //adding click event for gameBoard
        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, {once: true})
        })
        setBoardHover()
    };

    //adding mark from browser
    const handleClick = (e) => {
    const cell = e.target
    const currentMark = circleTurn ? circle_Mark : x_Mark
    makeMaker(cell, currentMark)
    // check winner
    //check for draw
    // switch turns
    switchTurns()
    setBoardHover()
    };
    return{startHover, handleClick};
})();
displayControlModule.startHover()

//add a mark o or x
const makeMaker = (cell, currentMark) => {
    cell.classList.add(currentMark)
};

// switch turn to x or x
const switchTurns = () => {
    circleTurn = !circleTurn
};

