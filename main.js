tttContainer = document.querySelector("#ttt-body");
tttCells = Array.from(document.querySelectorAll(".ttt-cell"));
startButton = document.querySelector("#start-button");
//tttCells[0].style.backgroundImage = "url('')";
const gameBoard = (()=>{
    const boardImg = [" ","xmark.png","omark.png"];
    const gameBoardArr = [0,0,0,0,0,0,0,0,0];

    const updateGameBoard = (ind,playerNo) =>{
        gameBoardArr[ind] = playerNo;
        imageURL = "url('/imgs/" + boardImg[playerNo] + "')";
        tttCells[ind].style.backgroundImage = imageURL;
    }

    const clear = () =>{
        for(let i=0;i<9;i++){
            gameBoardArr[i] = 0;
        }
    }
    return{
        gameBoardArr,
        updateGameBoard,
        clear
    };
})();

const Player = () =>{
    let name = ""
    let turn = 0;
    return {turn}
}



const gameController = (()=>{
    let playing = false;

    const p1 = Player();
    const p2 = Player();
    let total = 0;
    
    const resetGame =()=>{
        p1.turn = 0;
        p2.turn = 0;
        total = 0;
        gameBoard.clear();
        for (let i = 0; i < 9; i++) {
            tttCells[i].style.backgroundImage = "None";
        }
    }
    const onClickGB = (e)=>{
        if(playing){
            divIndex = e.target.getAttribute("data-ind");
            console.log(divIndex);

            if (p1.turn == p2.turn) {
                if (gameBoard.gameBoardArr[divIndex] == 0) {
                    gameBoard.updateGameBoard(divIndex, 1)
                    p1.turn += 1
                    total += 1;
                    console.log(gameBoard.gameBoardArr)
                    if (checkForWin(1)) {
                        console.log("P1 wins!")
                        playing = false
                    }
                    else {
                        if (total == 9) {
                            console.log("Draw!")
                            playing = false

                        }
                    }
                }
            }

            else {
                if (gameBoard.gameBoardArr[divIndex] == 0) {
                    gameBoard.updateGameBoard(divIndex, 2);
                    p2.turn += 1;
                    total += 1;
                    console.log(gameBoard.gameBoardArr);
                    if (checkForWin(2)) {
                        console.log("P2 wins!");
                        playing = false

                        //reset everything
                    }
                }
            }
        }
        
    }

    const checkForWin = (pNo) =>{
        for(let i=0;i<3;i++){
            if (gameBoard.gameBoardArr[i]==pNo){
                if (gameBoard.gameBoardArr[i + 3] == pNo && gameBoard.gameBoardArr[i + 6] == pNo){
                    return true;
                }
            }
        }
        for (let i = 0; i < 7; i+=3) {
            if (gameBoard.gameBoardArr[i] == pNo) {
                if (gameBoard.gameBoardArr[i + 1] == pNo && gameBoard.gameBoardArr[i + 2] == pNo) {
                    return true;
                }
            }
        }
        if(gameBoard.gameBoardArr[4]==pNo){
            if (gameBoard.gameBoardArr[0] == pNo && gameBoard.gameBoardArr[8] == pNo) {
                return true;
            }
            if (gameBoard.gameBoardArr[2] == pNo && gameBoard.gameBoardArr[6] == pNo) {
                return true;
            }
        }
        
        return false;
    }

    tttCells.forEach(element => {
        element.addEventListener('click', onClickGB, false);
    });

    startButton.addEventListener('click',(e)=> {
        let parentDisp = e.target.parentNode;
        let pNames = parentDisp.querySelectorAll("input");

        console.log(pNames[0].value);
        playing=true;
        p1.name = pNames[0].value;
        p2.name = pNames[0].value;
        resetGame();
    });
})();

