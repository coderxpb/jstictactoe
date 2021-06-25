tttContainer = document.querySelector("#ttt-body")
tttCells = Array.from(document.querySelectorAll(".ttt-cell"))
//tttCells[0].style.backgroundImage = "url('')";
let gameBoard = (()=>{
    let boardImg = [" ","xmark.png","omark.png"]
    let gameBoardArr = [0,0,0,0,0,0,0,0,0];

    const Clear = () =>{
        gameBoardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    const updateGameBoard = (ind,playerNo) =>{
        gameBoardArr[ind] = playerNo;
        imageURL = "url('/imgs/" + boardImg[playerNo] + "')";
        tttCells[ind].style.backgroundImage = imageURL;
    }

    return{
        gameBoardArr,
        updateGameBoard
    };
})();

const Player = () =>{
    let turn = 0;
    return {turn}
}

p1 = Player();
p2 = Player();

let gameController = (()=>{

    let onClickGB = (e)=>{
        divIndex = e.target.getAttribute("data-ind");
        console.log(divIndex);
        if(p1.turn==4 && p2.turn==4){
            if (gameBoard.gameBoardArr[divIndex] == 0) {
                gameBoard.updateGameBoard(divIndex, 1)
                p1.turn += 1
                if (checkForWin(1)) {
                    console.log("P1 wins!")
                    console.log(gameBoard.gameBoardArr)
                }
                else{
                    console.log("Draw");
                    //reset everything
                }
            }
        }

        else if(p1.turn==p2.turn){
            if(gameBoard.gameBoardArr[divIndex]==0){
                gameBoard.updateGameBoard(divIndex,1)
                p1.turn += 1
                if(checkForWin(1)){
                    console.log("P1 wins!")
                    console.log(gameBoard.gameBoardArr)
                    //reset everything
                }
            }
        }
        else{
            if (gameBoard.gameBoardArr[divIndex] == 0) {
                gameBoard.updateGameBoard(divIndex, 2)
                p2.turn += 1
                if (checkForWin(2)) {
                    console.log("P2 wins!")
                    //reset everything
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
})();

