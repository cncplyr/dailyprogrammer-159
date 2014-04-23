#Challenge #159
A solution to [r/dailyprogrammer's](http://www.reddit.com/r/dailyprogrammer/) challenge #159 in JavaScript.

## Play
Check it out [here](http://cncplyr.github.io/dailyprogrammer-159).

## Rules
See the full rules on the relevant dailyprogrammer posts:
  * [Part 1 - Easy](http://www.reddit.com/r/dailyprogrammer/comments/23lfrf/4212014_challenge_159_easy_rock_paper_scissors/)
  * [Part 2 - Intermediate](http://www.reddit.com/r/dailyprogrammer/comments/23qy19/4232014_challenge_159_intermediate_rock_paper/)

The challenge is to create a basic implementation of Rock Paper Scissors Lizard Spock. The initial stage is a basic implementation of the game, and subsequent updates increased the difficulty.

### Part 1 - Easy
Create a basic game that takes a user input for a move, and pits the move against a simple AI. The computer AI will pseudo-randomly pick a move. The moves will be compared and the outcome displayed. Statistics for each players wins, ties and games played should be displayed on exiting (I display these in a sidebar).

### Part 2 - Intermediate
In addition to the original game, implement a basic AI and a basic game loop:
  * The user can continue playing until they decide to quit.
  * Upon quitting the user is presented with a record of games played, player wins, ai wins, ties and associated percentages. (I display these in the sidebar).
  * The AI remembers the players previous moves, and picks it's next move based on the player's top picks and picking a counter. In the case of a tie, the computer will select randomly amongst counter moves, excluding moves it is attempting to counter.
  * Enable the user to select which AI to play against (random, learning)

## Links
  * [Wikipedia rules for Rock Paper Scissors Lizard Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock)