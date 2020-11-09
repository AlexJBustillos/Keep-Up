# Keep-Up

## Overview

My initial idea for this game was a retro 80's look of the **Simon game**. I drew inspiration for the styling from the movie **Drive**. Always loved the color and design of it and tried to reflect as much as possible in the design of the page. Another source of inspiration was the cult classic anime film **Akira**. I used an image of the film I found as the background for the game board.

## Installation

None is required. The game is hosted on this website:
```
alexjbustillos.github.io
```
If you would like to contribute to the game you can also 'fork' and 'clone' the repo in your terminal using this link:
```
git clone https://github.com/AlexJBustillos/Keep-Up.git
```

## Development

This is a **player vs AI** game mode for the moment. It starts with the instructions on the page of how to play the game and on the bottom right of the screen is the game button which takes you to the game board.
![Image of Instructions](KEEPUPInst.png)

This is the gameboard.
![Image of game with no lights](KeepUpnolight.png)
When you turn the game on the board lights up and you can start the game by pressing the start game button.
![Image of game with lights on](keepupwithlight.png)

```HTML
<div class="board">
                <div class="block" id="teal"></div>
                <div class="block" id="pink"></div>
                <div class="block" id="purple"></div>
                <div class="block" id="orange"></div>
                
            </div>
```
This was my game board. I put each block of color with its own **id**
This made it easier to do the styling for the game and add the glow effect for each color.

```CSS
.block {
    border-radius: 32px;
    height: 225px;
    width: 225px;
    transform: rotateZ(45deg);
    
}
```
I used the transform propery for each block in order to get the effect I wanted on the board.

```Javascript
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
```
This was my favorite piece of code for the **Javascript** because it helped me be able to turn the lights on and off throughout the code without having to hardcode this constantly. 















# Requirements
- [x] Alex Bustillos	
- [x] Keep Up
- [x] https://github.com/AlexJBustillos/Keep-Up
- [x] https://alexjbustillos.github.io	
- [ ] Regrade	
- [ ] Status	
- [x] Game is playable	
- [x] Game is multiplayer 
(or AI or PVE)
- [x] Game is winnable	
- [x] Winner/score is displayed (NO ALERTS)	
- [x] Has directions - how to play	
- [ ] Readme.md included and filled out	
- [x] Appropriate Use of GitHub (`commits`) 	- [ ] Deployed on Github Pages	
- DRY (Do Not Repeat Yourself) Code, Good Code Style	
- [x] Effort Put into Styling	
- [x] Reset button	
- [x] Good collision detection/event triggers