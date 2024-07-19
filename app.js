let btnBox = document.querySelectorAll(".box");
let reset = document.querySelector(".btn_reset")
let msgBox = document.querySelector(".msg_box")
let win = document.querySelector("#win")
let newGame = document.querySelector(".btn_newgame")

let turnO = true;
let count = 0;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

btnBox.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("btn clicked")
        if(turnO){
            box.innerHTML = "O"
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkwinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
})


const gameDraw = () => {
    win.innerHTML = `Game was a Draw`;
    msgBox.classList.remove("hide")
}

const checkwinner = () => {
    for(let pattern of winPattern){
       let ptn1value = btnBox[pattern[0]].innerHTML;
       let ptn2value = btnBox[pattern[1]].innerHTML;
       let ptn3value = btnBox[pattern[2]].innerHTML;

       if(ptn1value != "" && ptn2value != "" && ptn3value != ""){
        if(ptn1value === ptn2value && ptn2value === ptn3value){
            showWinner(ptn1value);
        }
       }
    }
}

let showWinner = (winner) =>{
    win.innerHTML = `Congratulation winner is : ${winner}`
    msgBox.classList.remove("hide")
    disabled();
}


const disabled = () =>{
    for(let box of btnBox){
        box.disabled = true;
    }
} 

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBox();
    msgBox.classList.add("hide");
}

const enableBox = () =>{
    for(let box of btnBox){
        box.disabled = false;
        box.innerHTML  = "";
    }
} 

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);