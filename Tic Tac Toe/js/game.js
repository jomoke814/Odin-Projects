const cellElements = document.querySelectorAll('[data-cell]');
const gameBoard = document.querySelector('.game-board');
const startGameBtn = document.querySelector('.start');
const x_Mark = 'x'
const circle_Mark = 'circle'
let circleTurn

//Creating players
let createPlayer = () => {
    (console.log('start creating player'))
    for(let i = 0; i < 4; i++) {
        if(gameBoardModule.playerArray.length >= 6) {
            gameBoardModule.makePlayerMove();
            (console.log('getting gameboard module'))
            break;
        }else if(gameBoardModule.playerArray.length == 0) {
            (console.log('creating player1'))
            let playerName = prompt("Whats your name Player1?");
            if(playerName == '' || playerName == null) {
                alert("Sorry, Name cannot be blank!");
                continue;
            }

            let playerNumber = 1;
            let assignSymbol = x_Mark;
            alert("Your player1 assigned X");
            gameBoardModule.playerArray.push(playerName,playerNumber,assignSymbol);
            console.log('show content of player1array', gameBoardModule.playerArray);

        }else if(gameBoardModule.playerArray.length !== 0 ) {
            (console.log('creating player2'))
            let playerName = prompt("Whats your name Player2?");
            if(playerName == '' || playerName == null) {
                alert("Sorry, Name cannot be blank!");
                continue;
            }

            let playerNumber = 2;
            let assignSymbol = circle_Mark;
            alert("Your player1 assigned circle");
            gameBoardModule.playerArray.push(playerName,playerNumber,assignSymbol);
            console.log('show content of player2array', gameBoardModule.playerArray);
        }
    }
};

let gameBoardModule = (function () {
    let gameBoard = [];
    let playerArray = [];
    (console.log('starting gameboard module'))
    let makePlayerMove = () => {
        (console.log('making player move'))
        if(playerArray.length == 6 && gameBoard.length < 9) {
            if(gameBoard.length == 0) {
                gameBoard.push(playerArray[2]);
                console.log('gameBoard array', gameBoard)
            }else if(gameBoard[gameBoard.length - 1] == x_Mark) {
                gameBoard.push(playerArray[5]);
                console.log('gameBoard array', gameBoard)
            } else if(gameBoard[gameBoard.length -1] == circle_Mark) {
                gameBoard.push(playerArray[2])
                console.log('gameBoard array', gameBoard)
            }
        };
    }
    
    return {gameBoard, playerArray, makePlayerMove};
})();
startGameBtn.addEventListener('click', createPlayer);

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

