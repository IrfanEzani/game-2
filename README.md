# Rock Paper Scissors Game
<img width="1184" alt="image" src="https://github.com/IrfanEzani/rock-paper-scissor/assets/59435235/17b1d1ac-4a05-48de-8833-29c4e1253d31">

## Overview
This Rock Paper Scissors game is a simple, interactive web application built using HTML, CSS, and JavaScript. The game pits a player against the computer in the classic hand game where rock beats scissors, scissors beat paper, and paper beats rock.

## Game Logic Implementation
### Initialization
The game initializes by setting up the main gameplay elements. It defines two scores (`pScore` and `cScore`) for the player and the computer, respectively, and selects DOM elements necessary for the game like the play button, match area, and score display. Event listeners are added to these elements to manage the game flow.

### Start and End Game Logic
- **Starting the Game**: The game starts when the player clicks the "Let's go" button. This triggers a transition effect, fading out the intro screen and bringing in the game area and score display.
- **Ending the Game**: The game ends when either the player or the computer reaches a score of 3. This triggers a transition to the end screen, displaying a message to the player.

### Play Match
- **Hand Options**: Players can choose between rock, paper, or scissors.
- **Random Computer Choice**: When a player makes a choice, the computer randomly selects one of the three options.
- **Animations**: Upon selection, hand animations are triggered for both the player and the computer.

### Score Update and Round Resolution
- **Comparing Choices**: A function `compareHands` is used to determine the winner of each round based on the classic rules of Rock Paper Scissors.
- **Updating Score**: The scores are updated accordingly after each round.
- **Displaying Results**: The game displays a message indicating the winner of each round and updates the overall score.

### Hand Animation Reset
After each round, the animations on the hand images are reset to enable a fresh start for the next round.

## Installation
Open `index.html` in a web browser to start the game.
