const cellElements = document.querySelectorAll('[data-cell]');
const gameBoard = document.querySelector('.game-board');
const restartBtn = document.querySelector('.reset');
const x_Mark = 'x'
const circle_Mark = 'circle'
let circleTurn

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
    const winningMessageElement = document.getElementById('winningMsg');
    const winningMessage = document.querySelector('[data-winning-msg]');
    
    const winCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ] 
   
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
        if(checkWinner(currentMark)) {
        endGame(false)
        } else if (Draw()) {
        endGame(true)
        } else {
        // switch turns
        switchTurns()
        setBoardHover()
        }
    };

    const Draw = () => {
        return [...cellElements].every(cell => {
            return cell.classList.contains(x_Mark) || cell.classList.contains(circle_Mark)
        })
    }

    const checkWinner = (currentMark) => {
        return winCombination.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentMark)
            })
        })
    };
    
    const endGame = (draw) => {
        if(draw) {
            winningMessage.innerText = 'Draw!'
        } else {
            winningMessage.innerText = `${circleTurn ? "O" : "X"} Wins!`
        }
        winningMessageElement.classList.add('show')
    }

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

const resetGame = () => {
    location.reload();
};

restartBtn.addEventListener('click', resetGame)
