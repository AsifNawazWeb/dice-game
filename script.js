'use strict';


let player0El=document.querySelector('.player--0');
let player1El=document.querySelector('.player--1');
let score0El=document.querySelector('#score--0');
let score1El=document.querySelector('#score--1');
let diceEl=document.querySelector('.dice');
let btnHold=document.querySelector('.btn--hold');
let btnNew=document.querySelector('.btn--new');
let btnRoll=document.querySelector('.btn--roll');
let current0El=document.querySelector('#current--0');
let current1El=document.querySelector('#current--1');



diceEl.classList.add('hidden');
score0El.textContent=0;
score1El.textContent=0;

let scores=[0,0];
let currentScore=0;
let activePlayer=0;
let playing=true;



const switchPlayer=function(){

    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer= activePlayer===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Dice Roll Event Handling

    btnRoll.addEventListener('click',function(){

        if(playing){

            diceEl.classList.remove('hidden');

            let dice=Math.trunc(Math.random()*6)+1;

            diceEl.src= `dice-${dice}.png`;

            if(dice!==1){
            currentScore +=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
            //document.querySelector(`.--${activePlayer}`).style.=currentScore;

            }
            else{
                
                switchPlayer();

                
            }

    }

    })


    //hold Event Handling

    btnHold.addEventListener('click', function(){

        if(playing){

        scores[activePlayer] +=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

        if(scores[activePlayer]>=50){
            
            playing=false;
            diceEl.classList.add('hidden');

  
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }

        else{
            switchPlayer();
        }
    }

    })


    btnNew.addEventListener('click', function(){

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        document.querySelector('.player--0').classList.add('player--active');
        score0El.textContent=0;
        score1El.textContent=0;
        current0El.textContent=0;
        current1El.textContent=0;
        playing=true;
        scores=[0,0];
        currentScore=0;
        activePlayer=0;
    })

