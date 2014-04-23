function IntermediateAI(){
	AI.call(this);
	this.history = {
		'rock': 0,
		'paper': 0,
		'scissors': 0,
		'lizard': 0,
		'spock': 0
	}
};
IntermediateAI.prototype = new AI();
IntermediateAI.prototype.constructor = IntermediateAI;
IntermediateAI.prototype.type = function() {
	return 'Intermediate AI';
}
IntermediateAI.prototype.move = function() {
	/* Get the most popular enemy moves */
	var maxCount = 0;
	for (var move in this.history) {
		if (this.history[move] > maxCount) { maxCount = this.history[move] }
	}
	var popular = []; // The most popular enemy moves
	for (var move in this.history) {
		if (this.history[move] === maxCount) { popular.push(move) }
	}
	
	/* Work out our potential moves */
	var potential = [];
	$.each(popular, function(k, popularMove) {
		/* Add counters to the most popular enemy moves */
		$.each(g.rules, function(winningMove, v) {
			$.each(v, function(losingMove, v) {
				if (popularMove == losingMove) { potential.push(winningMove) }
			});
		});
	});
	/* Remove duplicates */
	$.unique(potential);
	/* Remove popular player moves */
	$.each(popular, function(k, v) {
		if (potential.indexOf(v) > -1) { potential.splice(potential.indexOf(v), 1) }
	});
	
	/* Now choose a move! */
	if (potential.length === 0) {
		/* All choices equally popular, choose randomly */
		var random = Math.floor(Math.random() * 5);
		return Object.keys(g.rules)[random];
	} else {
		/* Choose one of our potential moves */
		var random = Math.floor(Math.random() * potential.length);
		return potential[random];
	}
}
IntermediateAI.prototype.lastMatch = function(result) {
	this.history[result.p1]++;
}