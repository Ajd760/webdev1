// Number Guessing Game script
let randNum = Math.floor(Math.random() * 100) + 1;

const guesslist = document.querySelector('.guesslist');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessField.focus();


function checkGuess ()
{
    let userGuess = Number(guessField.value);
    if (guessCount === 1)
    {
        guesslist.textContent = 'Previous guesses: ';
    }
    guesslist.textContent += userGuess + ' ';

    if (userGuess === randNum)
    {
        lastResult.textContent = 'You win! Good job.';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    }
    else if(guessCount === 10)
    {
        lastResult.textContent = 'GAME OVER!';
        setGameOver();
    }
    else
    {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randNum)
        {
            lowOrHigh.textContent = 'Last guess was too LOW.';
        }
        else if(userGuess > randNum)
        {
            lowOrHigh.textContent = 'Last guess was too HIGH';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() 
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.getElementById('gameDiv').append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParagraphs p');
    for(let i = 0; i < resetParas.length; i++)
    {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    guesslist.textContent = '';
    lastResult.style.backgroundColor = 'white';

    randNum = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);

/* 
function createParagraph()
{
    let para = document.createElement('p');
    para.textContent = 'You clicked it! Hooray!';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', createParagraph);
}
*/