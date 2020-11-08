//creat a variable with empty array
let playerArray = [];
let computerArray = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let on = false;
let win;

//grab elements needed
const grabContainer = document.querySelector('.container');
const grabBoard = document.querySelector('.board');
const grabGame = document.querySelector('.game');
const grabInstructions = document.querySelector('.instructions');
const teal = document.getElementById('teal');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const instructions = document.querySelector('.rules');
const turnCounter = document.getElementById('turn');
const onButton = document.getElementById('on');
const startButton = document.getElementById('start');

//Event Listeners as variables
startButton.addEventListener('click', () => {
    if (on || win) {
        
        play();
      };
})

onButton.addEventListener('click', () => {
    if (onButton.checked === true) {
        flashColor();
        setTimeout(() => {
            clearColor()
        }, 800)
        on = true;
        turnCounter.textContent = "-";
    } else {
        on = false;
        turnCounter.textContent = "";
        clearColor();
        clearInterval(intervalId);
    };
});

        
    
        
teal.addEventListener('click', () => {
    
    if (on) {
        playerArray.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
    
}); 

pink.addEventListener('click', () => {
    if (on) {
        playerArray.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
    
});    

purple.addEventListener('click', () => {
    if (on) {
        playerArray.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor()
            }, 300);
        }
    }
 
});   

orange.addEventListener('click', () => {
    if (on) {
        playerArray.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
 
});     

grabInstructions.addEventListener('click', () => {
    grabGame.style.display = 'block';
    grabInstructions.style.display = 'none';
    grabBoard.style.display = 'none';
    instructions.style.display = 'block';
    onButton.style.display = 'none';
    startButton.style.display = 'none';
    document.getElementById('label').style.visibility = 'hidden';
    document.getElementById('turn').style.visibility = 'hidden';
});
grabGame.addEventListener('click', (event) => {
    grabGame.style.display = 'none';
    grabInstructions.style.display = 'block';
    grabBoard.style.display = 'flex';
    instructions.style.display = 'none';
    onButton.style.display = 'inline-block';
    startButton.style.display = 'inline-block';
    document.getElementById('label').style.visibility = 'visible';
    document.getElementById('turn').style.visibility = 'visible';
    // getRandomChoice();
    // addElementToArray();
    
});

play = () => {
    win = false;
    computerArray = [];
    playerArray = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.textContent = 1;
    good = true;
    for (i = 0; i < 15; i++) {
        computerArray.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800)
};

gameTurn = () => {
    on = false;

    if (flash === turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
           if (computerArray[flash] == 1) one(); 
           if (computerArray[flash] == 2) two(); 
           if (computerArray[flash] == 3) three(); 
           if (computerArray[flash] == 4) four();
           flash++; 
        }, 200);

    }
}

one = () => {
    let audio = document.getElementById('forTeal');
    audio.play();
    teal.classList.add('glow-teal');

}
two = () => {
    let audio = document.getElementById('forPink');
    audio.play();
    pink.classList.add('glow-pink');
}
three = () => {
    let audio = document.getElementById('forPurple');
    audio.play();
    purple.classList.add('glow-purple');
}
four = () => {
    let audio = document.getElementById('forOrange');
    audio.play();
    orange.classList.add('glow-orange');
}
clearColor = () => {
    teal.classList.remove('glow-teal');
    pink.classList.remove('glow-pink');
    purple.classList.remove('glow-purple');
    orange.classList.remove('glow-orange');
}
flashColor = () => {
    teal.classList.add('glow-teal');
    pink.classList.add('glow-pink');
    purple.classList.add('glow-purple');
    orange.classList.add('glow-orange');
}



check = () => {
    if (playerArray[playerArray.length - 1] !== computerArray[playerArray.length - 1]) 
    good = false;
    if (playerArray.length === 15 && good) {
        winGame();
    }
    if (good === false) {
        flashColor();
        let audio = document.getElementById('forLoss');
        audio.play();
        turnCounter.textContent = 'YOU LOSE AND NOW YOURE A BOSS TOO...OF THIS PILE OF RUBBLE';
        on = false;
        win = true;
        setTimeout(() => {
            // turnCounter.textContent = turn;
            clearColor();
            // play()
        }, 1000);
    };
    if (turn === playerArray.length && good && !win) {
        turn++;
        playerArray = [];
        compTurn = true;
        flash = 0;
        turnCounter.textContent = turn;
        intervalId = setInterval(gameTurn, 800)
    }
}

winGame = () => {
    flashColor();
    turnCounter.textContent = 'WIN!'
    on = false;
    win = true;
    let audio = document.getElementById('forWin');
    audio.play();
};
















    

































    


                
        
    




























   