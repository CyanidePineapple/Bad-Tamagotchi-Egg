## User Stories

1. As a user, I want to see a landing page for the game to see the effects of my actions.
1. As a user, I want to see buttons for play, feed and sleep so I know what I can do.
1. As a user, I want to press the buttons to be able to alter the stats
1. As a user, I want to keep my pet within a certain range of stats to maintain my pet and have consequences otherwise.
1. As a user, I want a losing message if I fail
1. As a user, I want a reset button to start over if I lose

## Pseudocode

1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should
be called to render this game state.

4) The state of the game should be rendered to the user.

5) Handle the game over logic.

6) Handle each instance of a player clicking a button with the use of a
`handleClick()` function.

7) Create reset functionality.

## Notes
1. HTML Header Section: 
Contains the title of the game.
Game Interface / UI Section: Includes buttons for playing, feeding, and putting the pet to sleep.
Game Data Section: Displays the current state of the pet’s boredom, hunger, and sleepiness.
Game Display / Messaging Section: Shows messages about the game state, such as a win or loss, and a button to restart the game.
Instructions Section: Provides instructions on how to play the game.
1. CSS
Button Styling: Layout and style of the interaction buttons.
Stat Display Styling: Layout and style of the stats showing the pet's state.
Message Styling: Style for game over messages and the restart button.
Responsiveness: Ensures that the UI is responsive across different devices by using flexible units like vw for font sizes and white-space: nowrap to maintain text on one line.
1. JavaScript
State Management
state: Tracks the current levels of boredom, hunger, and sleepiness.
timer: Controls the interval at which the game state updates.
gameOver: Boolean to track whether the game is over.
Cached Element References
Buttons (play, feed, sleep).
Stat elements displaying boredom, hunger, and sleepiness levels.
Game message and restart button.
Core Functions
init(): Initializes the game, resets states, hides game over messages, and starts the game timer.
runGame(): Runs the game loop, updates the state, checks for game over, and renders the UI.
updateStates(): Increases boredom, hunger, and sleepiness by a random amount each game loop iteration.
getRandomInt(max): Generates a random integer to simulate the randomness of the pet's needs.
checkGameOver(): Ends the game if any stat reaches 10.
render(): Updates the DOM with the current state and handles game over conditions.
Event Listeners
Attached to the buttons (play, feed, sleep) to reset the corresponding state to 0 when clicked.
Attached to the restart button to reinitialize the game.
1. Assets
Images: A poorly drawn egg graphic to visually represent the pet.
1. Future Enhancements/Additional Interactions: Add more buttons or interactions that affect different stats or introduce new challenges.
Advanced State Management: Implement more complex state interactions or dependencies between stats.
Animations: Add animations to the pet or game elements to make the game more engaging.
Sound Effects: Integrate sound effects to correspond with interactions or state changes.
Testing & Debugging
State Updates: Ensure that state updates occur correctly and at the right intervals.
Responsive Design: Test the UI on various screen sizes to ensure text and elements display as intended.
Game Over Conditions: Verify that the game correctly detects and handles game over scenarios.
