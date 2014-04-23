function IntermediateAI(){
	AI.call(this);
};
IntermediateAI.prototype = new AI();
IntermediateAI.prototype.constructor = IntermediateAI;
IntermediateAI.prototype.type = function() {
	return 'Intermediate AI';
}
IntermediateAI.prototype.move = function() {
	return 'rock';
	}
}
IntermediateAI.prototype.lastMatch = function(result) {}