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




//add event listener
grabStart.addEventListener('click', () => {
    grabStart.style.display = 'none';
    grabReset.style.display = 'block';
    grabBoard.style.display = 'flex';
    instructions.style.display = 'none';
})

teal.addEventListener('click', () => {
    teal.classList.add('glowTeal');
    setTimeout(() => {
        teal.classList.remove('glowTeal');
    }, 1000)
});    
pink.addEventListener('click', () => {
    pink.classList.add('glowPink');
    setTimeout(() => {
        pink.classList.remove('glowPink');
    }, 1000)
});    
purple.addEventListener('click', () => {
    purple.classList.add('glowPurple');
    setTimeout(() => {
        purple.classList.remove('glowPurple');
    }, 1000)
});    
orange.addEventListener('click', () => {
    orange.classList.add('glowOrange');
    setTimeout(() => {
        orange.classList.remove('glowOrange');
    }, 1000)
});    


//next button stored as a variable
//variable of what is expecting set to string of id color and it should match on the logic
//first log each box was clicked and compare that to the one expecting and light up the one as the prompt
//first try sequence of clicks on my side 

//creat a variable with empty array
//if there is a time reset time and reset colors or anything that needs to be turned off. including emptying array