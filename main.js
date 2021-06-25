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
        tttCells[ind].style.
        
    }

    return{
        gameBoardArr
    };
})();

const Player = () =>{
    let turn = 0;
    return {turn}
}

let gameController = (()=>{
    let onClick = (e)=>{
        console.log(e.target);
    }
})();