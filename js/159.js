function Game() {
	this.games = 0;
	this.p1Wins = 0;
	this.p2Wins = 0;
	this.ties = 0;
	this.history = [];
	this.rules = {
		rock: {
			scissors: 'crushes',
			lizard: 'crushes'
		},
		paper: {
			rock: 'covers',
			spock: 'disproves'
		},
		scissors: {
			paper: 'cut',
			lizard: 'decapitate'
		},
		lizard: {
			paper: 'eats',
			spock: 'poisons'
		},
		spock: {
			rock: 'vaporizes',
			scisors: 'smashes'
		}
	}
}
// 0 = draw, 1 = p1, 2 = p2
Game.prototype.fight = function(moveOne, moveTwo) {
	var result = { winner: 0, message: '' };
	// Draw
	if (moveOne === moveTwo) {
		result.message += 'Both players chose ' + moveOne + '. Tie!';
		this.history.push({p1: moveOne, p2: moveTwo, result: 'tie'});
		this.ties++;
	} else if (this.rules[moveOne][moveTwo] !== undefined) {
		result.winner = 1;
		result.message += moveOne + ' ' +this.rules[moveOne][moveTwo] + ' ' + moveTwo + '. Player 1 wins!';
		this.history.push({p1: moveOne, p2: moveTwo, result: 'p1'});
		this.p1Wins++;
	} else {
		result.winner = 2;
		result.message += moveTwo + ' ' +this.rules[moveTwo][moveOne] + ' ' + moveOne + '. AI wins!';
		this.history.push({p1: moveOne, p2: moveTwo, result: 'p2'});
		this.p2Wins++;
	}
	
	this.games++;
	return result;
}

function AI() {}
AI.prototype.move = function() {
	return 'rock'; // The best move
}
