let btns = document.querySelectorAll(".btn");
let msg = document.querySelector(".msges");
let resetBtn = document.querySelector(".reset-btn");
const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
flag = true;

const checkPattern =()=>{
    for( pattern of winPatterns){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        if (pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1 ===pos2 && pos2 === pos3 ){
               console.log("winner is ",pos1);
               showWinner(pos1);
               
            }
        } 
    }
};

btns.forEach((box )=> {
    box.addEventListener("click",()=>{
        if (flag){
            box.innerText = "X";
            flag =false;
            
        }
        else{
            box.innerText = "O";
            flag=true;
        }
        box.disabled = true;
       checkPattern ();
      
        
     } );
     
});

const showWinner = (winner) =>{
    msg.innerText = (`congratulation winner is ${winner}`);
    disabledBoxes();
    resetGame();
}

const disabledBoxes = () =>{
    for ( let box of btns){
        box.disabled = true;
    }
}
const enabledBoxes = () =>{
    for ( let box of btns){
        box.disabled = false;
        box.innerText = " ";
    }
};
const resetGame = () =>{
    flag=true;
    enabledBoxes();
}
resetBtn.addEventListener("click",resetGame);