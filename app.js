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
//creat a variable with empty array
let colorArray = [];
let computerArray = [];

const getRandomChoice = () => {
    const choices = [
        teal,
        pink,
        purple,
        orange    
    ];
    const computerChoice = choices[parseInt(Math.random() * choices.length)];
    computerChoice.classList.add('glow-' + computerChoice.id);
    setTimeout(() => {
        computerChoice.classList.remove('glow-' + computerChoice.id)
    }, 1000);
    const count = computerArray.push(computerChoice);
    // return computerChoice;
    


};


//compare random choices with player choices should be compared after a turn
const sequence = [getRandomChoice()];

//add event listener
grabStart.addEventListener('click', () => {
    grabStart.style.display = 'none';
    grabReset.style.display = 'block';
    grabBoard.style.display = 'flex';
    instructions.style.display = 'none';
    getRandomChoice();
    console.log(computerArray);
});
addElementToArray = () => {
    teal.addEventListener('click', () => {
        teal.classList.add('glow-teal');
        setTimeout(() => {
            teal.classList.remove('glow-teal');
        }, 500);
        const count = colorArray.push('teal');
    }); 
    pink.addEventListener('click', () => {
        pink.classList.add('glow-pink');
        setTimeout(() => {
            pink.classList.remove('glow-pink');
        }, 500);
        const count = colorArray.push('pink');
    });    
    purple.addEventListener('click', () => {
        purple.classList.add('glow-purple');
        setTimeout(() => {
            purple.classList.remove('glow-purple');
        }, 500);
        const count = colorArray.push('purple');
    });    
    orange.addEventListener('click', () => {
        orange.classList.add('glow-orange');
        setTimeout(() => {
            orange.classList.remove('glow-orange');
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






















// let colorArray = [...sequence];



// if (computerChoice[i] === teal.classList.add('glowTeal')) {
//     setTimeout(() => {
//         teal.classList.toggle('glowTeal');
//     }, 1000);
// } else if (computerChoice[i] === pink.classList.add('glowPink')) {
//     setTimeout(() => {
//         pink.classList.toggle('glowPink');
//     }, 1000);
// } else if (computerChoice[i] === purple.classList.add('glowPurple')) {
//     setTimeout(() => {
//         purple.classList.toggle('glowPurple');
//     }, 1000);
// } else if (computerChoice[i] === orange.classList.add('glowOrange')) {
//     setTimeout(() => {
//         orange.classList.toggle('glowOrange');
//     }, 1000);
// }


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