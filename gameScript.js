var blockSize = 25;
var total_row = 17; //total row number
var total_col = 17; //total column number
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// Set the total number of rows and columns
var speedX = 0; //speed of snake in x coordinate.
var speedY = 0; //speed of snake in Y coordinate.

var snakeBody = [];

var foodX;
var foodY;

var gameOver = false;
var score = 0; // Initialize score variable

// Function to display score
function displayScore() {
	context.fillStyle = "white";
	context.font = "20px Arial";
	context.fillText("Score: " + score, 10, 30);
}


window.onload = function () {
	// Set board height and width
	board = document.getElementById("board");
	board.height = total_row * blockSize;
	board.width = total_col * blockSize;
	context = board.getContext("2d");

	placeFood();
	document.addEventListener("keyup", changeDirection); //for movements
	// Set snake speed
	setInterval(update, 1000 / 10);

	// Add a listener to the high scores button
    document.getElementById('clearScores').addEventListener('click', function() {
        localStorage.removeItem('highScores'); // Clears the high scores from storage
        highScoresList.innerHTML = ''; // Clears the list from the display
    });
};

function update() {
	if (gameOver) {
        // Prompt the user for their initials
        let initials = prompt("New high score! Enter your initials:", "");
        if (initials === null || initials === "") {
            initials = "???"; // Default initials if none provided
        }

        // Create a score object
        let scoreEntry = { initials: initials, score: score };

        // Get the current top scores from localStorage
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        // Add the new score
        highScores.push(scoreEntry);

        // Sort the scores in descending order by score value
        highScores.sort((a, b) => b.score - a.score);

        // Keep only the top 3 scores
        highScores = highScores.slice(0, 3);

        // Save the high scores back to localStorage
        localStorage.setItem('highScores', JSON.stringify(highScores));

        // Optionally, you can also update the high scores list on the page immediately
        updateHighScoresList(highScores);

        return;
    }

	// Background of a Game
	context.fillStyle = "black"; // Change background color to black
	context.fillRect(0, 0, board.width, board.height);

	// Set food color and position
	context.fillStyle = "yellow";
	context.fillRect(foodX, foodY, blockSize, blockSize);

	if (snakeX == foodX && snakeY == foodY) {
		snakeBody.push([foodX, foodY]);
		placeFood();
		score++;
	}

	// body of snake will grow
	for (let i = snakeBody.length - 1; i > 0; i--) {
		// it will store previous part of snake to the current part
		snakeBody[i] = snakeBody[i - 1];
	}
	if (snakeBody.length) {
		snakeBody[0] = [snakeX, snakeY];
	}

	context.fillStyle = "green";
	snakeX += speedX * blockSize; //updating Snake position in X coordinate.
	snakeY += speedY * blockSize; //updating Snake position in Y coordinate.
	context.fillRect(snakeX, snakeY, blockSize, blockSize);
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}

	if (snakeX < 0 
		|| snakeX > total_col * blockSize 
		|| snakeY < 0 
		|| snakeY > total_row * blockSize) { 
		
		// Out of bound condition
		gameOver = true;
		alert("Game Over");
		location.reload();
	}

	for (let i = 0; i < snakeBody.length; i++) {
		if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
			
			// Snake eats own body
			gameOver = true;
			alert("Game Over");
			location.reload();
		}
	}
	displayScore();
}

// Movement of the Snake - We are using addEventListener
function changeDirection(e) {
	if (e.code == "ArrowUp" && speedY != 1) { 
		// If up arrow key pressed with this condition...
		// snake will not move in the opposite direction
		speedX = 0;
		speedY = -1;
	}
	else if (e.code == "ArrowDown" && speedY != -1) {
		//If down arrow key pressed
		speedX = 0;
		speedY = 1;
	}
	else if (e.code == "ArrowLeft" && speedX != 1) {
		//If left arrow key pressed
		speedX = -1;
		speedY = 0;
	}
	else if (e.code == "ArrowRight" && speedX != -1) { 
		//If Right arrow key pressed
		speedX = 1;
		speedY = 0;
	}
}

// Randomly place food
function placeFood() {

	// in x coordinates.
	foodX = Math.floor(Math.random() * total_col) * blockSize; 
	
	//in y coordinates.
	foodY = Math.floor(Math.random() * total_row) * blockSize; 
}

function updateHighScoresList(highScores) {
    let highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = ''; // Clear the current list
    for (let score of highScores) {
        let listItem = document.createElement('li');
        listItem.textContent = `${score.initials}: ${score.score}`; // Correctly display initials and score
        highScoresList.appendChild(listItem);
    }
}

