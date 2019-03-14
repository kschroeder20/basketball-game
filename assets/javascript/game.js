var game = {
    randomNumGoal: 0,
    randomNumOne: 0,
    randomNumTwo: 0,
    randomNumThree: 0,
    randomNumFour: 0,
    gameOn: false,
    gameWins: 0,
    gameLosses: 0,
};
//When user clicks the start game button, display random goal number up top
$("#start-game").on("click", () => {
    game.gameOn = true;
    game.randomNumGoal = 0;
    game.randomNumOne = 0;
    game.randomNumTwo = 0;
    game.randomNumThree = 0;
    game.randomNumFour = 0;
                        
    //Create random goalnumber between 19 - 120 to start the game
    game.randomNumGoal = Math.floor(Math.random() * (120 - 19 + 19)) + 19;
    $("#goal-number").text(game.randomNumGoal);
    //Create random number between 1 - 12 for each player
    game.randomNumOne = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    game.randomNumTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    game.randomNumThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    game.randomNumFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    //Test
    console.log("Goal: " + game.randomNumGoal);
    console.log("number 1: " + game.randomNumOne);
    console.log("number 2: " + game.randomNumTwo);
    console.log("number 3: " + game.randomNumThree);
    console.log("number 4: " + game.randomNumFour);
});

    $("#img-1").on("click", () => {
        game.randomNumGoal = game.randomNumGoal - game.randomNumOne;
        if (game.gameOn === true && game.randomNumGoal < 0) {
            alert("You Lost! Click the Button to Start a New Game.");
            game.gameLosses++;
            game.gameOn = false;
        } else if (game.gameOn === true && game.randomNumGoal === 0) { 
            alert("You Won! Click the Button to Start a New Game.");
            game.gameWins++;
            game.gameOn = false;

        }else {
            $("#goal-number").text(game.randomNumGoal);
            
        }
    });
    $("#img-2").on("click", () => {
      game.randomNumGoal = game.randomNumGoal - game.randomNumTwo;
        if (game.gameOn === true && game.randomNumGoal < 0) {
          alert("You Lost!");
          game.gameOn = false;
        } else if (game.gameOn === true && game.randomNumGoal === 0) {
            alert("You Won! Click the Button to Start a New Game.");
            game.gameWins++;
            game.gameOn = false;

        } else {
            $("#goal-number").text(game.randomNumGoal);
          
      }
    });
    $("#img-3").on("click", () => {
      game.randomNumGoal = game.randomNumGoal - game.randomNumThree;
        if (game.gameOn === true && game.randomNumGoal < 0) {
          alert("You Lost!");
          game.gameOn = false;
        } else if (game.gameOn === true && game.randomNumGoal === 0) {
            alert("You Won! Click the Button to Start a New Game.");
            game.gameWins++;
            game.gameOn = false;

        } else {
            $("#goal-number").text(game.randomNumGoal);
          
      }
    });
    $("#img-4").on("click", () => {
        game.randomNumGoal = game.randomNumGoal - game.randomNumFour;
        if (game.gameOn === true && game.randomNumGoal < 0) {
            alert("You Lost!");
            game.gameOn = false;
        } else if (game.gameOn === true && game.randomNumGoal === 0) {
            alert("You Won! Click the Button to Start a New Game.");
            game.gameWins++;
            game.gameOn = false;

        } else {
            $("#goal-number").text(game.randomNumGoal);
        }
    });





