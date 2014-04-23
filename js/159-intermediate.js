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
	return 'rock';
}
IntermediateAI.prototype.lastMatch = function(result) {
	this.history[result.p1]++;
}