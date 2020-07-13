
const game=function(){
  //scores at the start of the game
  let pScore=0;
  let cScore=0;
  
  //starting the game
  const startGame=function(){
    //grabbing the button
    const playBtn=document.querySelector('.intro button');
    
    //grabbing the starting page
    const introScreen=document.querySelector('.intro');
    
    //grabbing the second page after clicking button
    const match=document.querySelector('.match');
    
    //events to the button
    playBtn.addEventListener('click',function(){
      introScreen.classList.add('fadeOut');
      
      match.classList.add('fadeIn')
    })
  }
  
  //play matches
  const playMatch=function(){
    //grabbing all the option buttons
    const options=document.querySelectorAll('.options button');
   
   //grabbing the player hand img
    const playerHand=document.querySelector('.player-hand');
    
    //grabbing the computer hand img
    const computerHand=document.querySelector('.computer-hand');
    
    //garbbing both images
    const hands=document.querySelectorAll('.hands img');
    
    //looping through the images ahe adding events to it 
    hands.forEach((hand)=>{
      hand.addEventListener('animationend',function(){
        this.style.animation=''
      })
    })
    
    //computer's option
    const computerOptions=['rock','paper','scissors'];
    
    //looping through the options adding events to it in order to generate a random option everytime
    options.forEach(function(option){
      option.addEventListener('click',function(){
        //pC choice
       const computerNumber=Math.floor(Math.random()*3);
       const computerChoice= computerOptions[computerNumber];
       
       setTimeout(()=>{
         //here we call compare hands with parameters as the text content of the option and the random option generated by the computer 
         compareHands(this.textContent, computerChoice)
         
         //update the images 
         playerHand.src = `./images/${this.textContent}.png`;
         
         computerHand.src = `./images/${computerChoice}.png`;
       },2000)
       
       //adding animation to the hands
       playerHand.style.animation='shakePlayer 2s ease';
       computerHand.style.animation='shakeComputer 2s ease'
      })
    })
  }
  
  //updating the score
  const updateScore=function(){
    //grabbing the elements
    const playerScore=document.querySelector('.player-score p');
    
    const computerScore=document.querySelector('.computer-score p');
    
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
  }
  
  //comparing for the winner
  const compareHands=function(playerChoice,computerChoice){
    const winner=document.querySelector('.winner');
    //check for a tie
    if(playerChoice===computerChoice){
      winner.textContent='It is a tie';
      return;
    }
    //check for a rock 
    if(playerChoice==='rock'){
      if(computerChoice==='scissors'){
        winner.textContent='Player Wins';
        pScore++
        updateScore();
        return;
      }else{
        winner.textContent='Computer Wins';
        cScore++
        updateScore();
        return;
      }
    }
    //check for paper 
    if(playerChoice==='paper'){
      if(computerChoice==='scissors'){
        winner.textContent='Computer Wins';
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent='Player Wins';
        cScore++
        updateScore();
        return;
      }
    }
    
    //check for scissors
    if(playerChoice==='scissors'){
      if(computerChoice==='rock'){
        winner.textContent='Computer Wins';
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent='Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }
  }
  //calling all the inner function. 
  startGame();
  playMatch();
}

game()
