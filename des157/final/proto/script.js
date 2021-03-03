(function () {

    'use strict';


    //creating variables
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score1 = document.getElementById('score1');
    const score2 = document.getElementById('score2');
    const actionArea = document.getElementById('actions');
    const hp1 = document.getElementById('hp1');
    const hp2 = document.getElementById('hp2');
    const pakichu = document.getElementById('pakichu');
    const vivi = document.getElementById('vivi');
    const pakichuSound = new Audio("media/pakichu_sound.mp3");
    const viviSound = new Audio("media/vivi_sound.mp3");
    const beep = new Audio("media/beep.mp3");

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png',
            'images/4die.png', 'images/5die.png', 'images/6die.png'
        ],
        players: [`${document.getElementById('name1').getAttribute('value')}`, `${document.getElementById('name2').getAttribute('value')}`],
        score: [100, 100],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 0
    };


    //start game button
    startGame.addEventListener("click", function () {
        beep.play();
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2 id="quith2">The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function () {
            location.reload();
        });

        setUpTurn();
    });

    //setting up each turn
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function () {
            beep.play();
            throwDice();
        })
    }

    //action of throwing dice, two dice numbers multiplied to create the sum of damage
    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 * gameData.roll2;
        game.innerHTML = `<p>${gameData.players[gameData.index]} dealt ${gameData.rollSum} damage!</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`

        gameData.index ? (gameData.index = 0) : gameData.index = 1;
        gameData.score[gameData.index] = gameData.score[gameData.index] - gameData.rollSum;
        gameData.index ? (gameData.index = 0) : gameData.index = 1;
        actionArea.innerHTML = '<button id="pass">Next Player</button>';

        document.getElementById('pass').addEventListener('click', function () {
            beep.play();
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
        });

        checkWinningCondition();

    }

    //checking if either players have won
    function checkWinningCondition() {
        gameData.index ? (gameData.index = 0) : gameData.index = 1;
        if (gameData.score[gameData.index] <= gameData.gameEnd) {
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : gameData.index = 1;
            game.innerHTML = `<h3>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} HP left!</h3>`;
            showCurrentScore();

            actionArea.innerHTML = '';
            document.getElementById('quith2').innerHTML = "The Game Has Ended";
            document.getElementById('quit').innerHTML = "Start a New Game?";
        } else {
            gameData.index ? (gameData.index = 0) : gameData.index = 1;
            showCurrentScore();
        }
    }

    //shows HP, updates HP bar, and changes the images based on HP
    function showCurrentScore() {

        //player hp number change
        hp1.style.width = `${gameData.score[0]}%`;
        score1.innerHTML = `<p>${gameData.score[0]} HP</p>`;

        hp2.style.width = `${gameData.score[1]}%`;
        score2.innerHTML = `<p>${gameData.score[1]} HP</p>`;

        //player 1 image and hp color change
        if (gameData.score[0] <= 0) {
            hp1.style.backgroundColor = "black";
            pakichu.src = "images/pakichu3.png";
            vivi.src = "images/viviwin.png";
            viviSound.play();
            return;
        } else if (gameData.score[0] < 25) {
            hp1.style.backgroundColor = "red";
            pakichu.src = "images/pakichu2.png";
        } else if (gameData.score[0] < 50) {
            hp1.style.backgroundColor = "goldenrod";
            pakichu.src = "images/pakichu1.png";
        }

        //player 2 image and hp change
        if (gameData.score[1] <= 0) {
            hp2.style.backgroundColor = "black";
            vivi.src = "images/vivi3.png";
            pakichu.src = "images/pakichuwin.png";
            pakichuSound.play();
        } else if (gameData.score[1] < 25) {
            hp2.style.backgroundColor = "red";
            vivi.src = "images/vivi2.png";
            console.log("c");
        } else if (gameData.score[1] < 50) {
            hp2.style.backgroundColor = "goldenrod";
            vivi.src = "images/vivi1.png";
        }
    }

    //changing names

    var name1Button = document.getElementById('name1Button');
    var name2Button = document.getElementById('name2Button');
    var name1 = document.getElementById('name1');
    var name2 = document.getElementById('name2');

    name1Button.addEventListener('click', function(){
        if(name1.hasAttribute('readonly')){
            name1.removeAttribute('readonly');
            name1.style.backgroundColor = "white";
        } else {
            name1.setAttribute('readonly', '');
            name1.style.backgroundColor = "transparent";
        }
    });

    name2Button.addEventListener('click', function(){
        if(name2.hasAttribute('readonly')){
            name2.removeAttribute('readonly');
            name2.style.backgroundColor = "white";
        } else {
            name2.setAttribute('readonly', '');
            name2.style.backgroundColor = "transparent";
        }
    });

})();