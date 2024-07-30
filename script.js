'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correctnumber';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 1;
// document.querySelector('.high-score').textContent = 20;

// // document.querySelector('.');
// document.querySelector('.check').addEventListener('click',function(){

// })


let secretNumber = Math.trunc(Math.random() * 20) +1;

// document.querySelector('.number').textContent = secretNumber;

console.log(secretNumber);

let score = 20;

document.querySelector('.score').textContent = score;

let highScore = 0;
// document.querySelector('.highscore').textContent = highScore;

//functionality for click button




document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No number';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Bingo, Correct Guess!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'Oops you lost the game';

            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = secretNumber;
        }
    }
    else if(guess<secretNumber){
        if(score > 1){
        score--;
        document.querySelector('.message').textContent = 'Too low';
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'Oops you lost the game';

            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = secretNumber;       
        }
    }


})

document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

})



 