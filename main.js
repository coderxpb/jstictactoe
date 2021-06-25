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
        if(p1.turn==5){
            console.log("Draw");
            //reset everything
        }
        else if(p1.turn==p2.turn){
            if(gameBoard.gameBoardArr[divIndex]==0){
                gameBoard.updateGameBoard(divIndex,1)
                p1.turn += 1
            }
        }
        else{
            if (gameBoard.gameBoardArr[divIndex] == 0) {
                gameBoard.updateGameBoard(divIndex, 2)
                p2.turn += 1
            }
        }
    }

    tttCells.forEach(element => {
        element.addEventListener('click', onClickGB, false);
    });
})();

