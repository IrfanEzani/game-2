const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
     const startGame = () => {
       const playBtn = document.querySelector('.intro button')
       const introScreen = document.querySelector('.intro')
       const match = document.querySelector('.match')
       const score = document.querySelector('.score')


      //fade effect
       playBtn.addEventListener('click', () => {
         introScreen.classList.add('fadeOut')
         match.classList.add('fadeIn')
         score.classList.add('fadeIn')
       });
     };

     const endGame = () => {
       const end = document.querySelector('.end')

       if (pScore === 3 ) {
         match.classList.add('fadeOut')
         score.classList.add('fadeOut')
         end.classList.add('fadeIn')

       }
     };

     //play match
     const playMatch = () => {
       const options = document.querySelectorAll('.options button');
       const playerHands = document.querySelector('.player-hand');
       const computerHands = document.querySelector('.computer-hand');
       const hands = document.querySelectorAll('.hands img');

       hands.forEach(hand => {
         hand.addEventListener('animationend', function() {
           this.style.animation = "";
         } )
       });


       //computer options
       const computerOptions = ["rock", "paper", "scissors"];
       options.forEach(item=> {
         item.addEventListener("click", function() {
           //computer choice
           const computerNum = Math.floor(Math.random() * 3);
           const computerChoice = computerOptions[computerNum];

            setTimeout(()=>{
              //compare hands
               compareHands(this.textContent, computerChoice);

              //update images
              playerHands.src = `./img/${this.textContent}.png`;
              computerHands.src = `./img/${computerChoice}.png`;
            }, 2000);

           //update animation instantly
           playerHands.style.animation = "shakePlayer 2s ease"
           computerHands.style.animation = "shakeComputer 2s ease"
         })
       })
     };

     const updateScore = () => {
       const playerScore = document.querySelector('.player-score p')
       const computerScore = document.querySelector('.computer-score p')
       playerScore.textContent = pScore;
       computerScore.textContent = cScore;
     }

     const compareHands = (playerChoice, computerChoice) => {
       //ipdatetext
       const winner = document.querySelector('.winner')

       if(playerChoice === computerChoice) {
         winner.textContent = "It's a tie. Play again."
         return ;
       }

       if(playerChoice === 'rock') {
         if (computerChoice === 'scissors') {
           winner.textContent = "Player wins."
           pScore++;
           updateScore();
           return ;
         } else {
           winner.textContent = "Computer wins."
           cScore++;
            updateScore();
           return ;
         }
       }

       if(playerChoice === 'paper') {
         if (computerChoice === 'scissors') {
           winner.textContent = "Computer wins."
            cScore++;
             updateScore();
           return ;
         } else {
           winner.textContent = "Player wins."
            pScore++;
             updateScore();
           return ;
         }
       }

       if(playerChoice === 'scissors') {
         if (computerChoice === 'rock') {
           winner.textContent = "Computer wins."
            cScore++;
             updateScore();
           return ;
         } else {
           winner.textContent = "Player wins."
            pScore++;
             updateScore();
           return ;
         }
       }
     };

     startGame();
     playMatch();
     endGame();


}

//startGame

game();
