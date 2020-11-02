//grab elements needed
const grabContainer = document.querySelector('.container');

const grabBoard = document.querySelector('.board');

const grabStart = document.querySelector('.start');

const grabReset = document.querySelector('.reset');

const allBlocks = document.querySelectorAll('.block');

const teal = document.getElementById('teal');

const pink = document.getElementById('pink');

const purple = document.getElementById('purple');

const orange = document.getElementById('orange');

const instructions = document.querySelector('.rules');

//add event listener
grabStart.addEventListener('click', () => {
    grabStart.style.display = 'none';
    grabReset.style.display = 'block';
    grabBoard.style.display = 'flex';
    instructions.style.display = 'none';
})

//next button stored as a variable
//variable of what is expecting set to string of id color and it should match on the logic
//first log each box was clicked and compare that to the one expecting and light up the one as the prompt
//first try sequence of clicks on my side 