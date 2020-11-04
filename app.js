//grab elements needed
const grabContainer = document.querySelector('.container');

const grabBoard = document.querySelector('.board');

const grabStart = document.querySelector('.start');

const grabReset = document.querySelector('.reset');

let allBlocks = document.querySelectorAll('.block');

let teal = document.getElementById('teal');

let pink = document.getElementById('pink');

let purple = document.getElementById('purple');

let orange = document.getElementById('orange');

let instructions = document.querySelector('.rules');

// const getRandomChoice = () => {
    
//     const computerChoice = [
//         teal,
//         pink,
//         purple,
//         orange    
//     ];
//     return computerChoice[parseInt(Math.random() * computerChoice.length)];
// };
// const sequence = [getRandomChoice()];
// let sequenceToGuess = [...sequence];

//creat a variable with empty array
let colorArray = [];








//add event listener
grabStart.addEventListener('click', () => {
    grabStart.style.display = 'none';
    grabReset.style.display = 'block';
    grabBoard.style.display = 'flex';
    instructions.style.display = 'none';
    
});
    

addElementToArray = () => {
    teal.addEventListener('click', () => {
        teal.classList.add('glowTeal');
        setTimeout(() => {
            teal.classList.remove('glowTeal');
        }, 500);
        const count = colorArray.push('teal');
    }); 
    pink.addEventListener('click', () => {
        pink.classList.add('glowPink');
        setTimeout(() => {
            pink.classList.remove('glowPink');
        }, 500);
        const count = colorArray.push('pink');
    });    
    purple.addEventListener('click', () => {
        purple.classList.add('glowPurple');
        setTimeout(() => {
            purple.classList.remove('glowPurple');
        }, 500);
        const count = colorArray.push('purple');
    });    
    orange.addEventListener('click', () => {
        orange.classList.add('glowOrange');
        setTimeout(() => {
            orange.classList.remove('glowOrange');
        }, 500)
         const count = colorArray.push('orange');
    });    

};
addElementToArray();






grabReset.addEventListener('click', () => {
    // console.log(grabReset);
    resetBoard();
});
resetBoard = () => {
    let colorArray = [];
    grabStart.style.display = 'block';
    grabReset.style.display = 'none';
    grabBoard.style.display = 'none';
    instructions.style.display = 'block';
    
};



//next button stored as a variable
//variable of what is expecting set to string of id color and it should match on the logic




//if there is a time reset time and reset colors or anything that needs to be turned off. including emptying array
// let canClick = false;
// const boxClicked = boxClicked => {
//     if (!canClick) return;
//     const expectedChoice = sequenceToGuess.shift();
//     if (expectedChoice === boxClicked) {
//         if (sequenceToGuess.length === 0) {
//             sequence.push(getRandomChoice());
//             sequenceToGuess = [...sequence];
//             startLights();
//         }
//     } else {
//         return alert('game over');
//     }
// };     
// const startLights = async () => {
//     canClick = false;
//     for (const elements of sequence) {
//         await getRandomChoice();
//     }
//     canClick = true;
// };
// startLights();      