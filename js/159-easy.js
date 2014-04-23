function EasyAI(){
	AI.call(this);
};
EasyAI.prototype = new AI();
EasyAI.prototype.constructor = AI;
EasyAI.prototype.move = function() {
	var random = Math.floor(Math.random() * 5);
	switch (random) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
		case 3:
			return 'lizard';
			break;
		default:
			return 'spock';
	}
}