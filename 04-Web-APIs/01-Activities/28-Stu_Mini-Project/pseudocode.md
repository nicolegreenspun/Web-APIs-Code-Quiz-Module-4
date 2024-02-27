## PSEUDOCODE

Write an index.html & script.js & styles.css files


copy the styles.css from slack and use the same class names
copy the html from slack into your own index.html
    be sure to properly link the script.js and styles.css to your index.html

in the script.js
    create the vars for the elements we are going to use (use querySelector)
    create the constants that will be needed (blanks, chosenWord, wins, losses, isWin, timer, timerCount)

    Arrays used to create blanks and letters on screen
    Array of words the user will guess

    create an init function that gets wins and losses

    create startGame function
        set isWin boolean to false
        disable start button when game is ongoing
        render blanks
        start the timer
    
    create winGame function
        display you won
        increase win counter
        undisable the start button
        set win counts to local storage
    
    creat loseGame
        display losing text
        increase losses
        undisable the start button
        set losses in local Storage
    
    create startTimer function
    create renderBlanks function
    create setWins, setLosses, get wins, getLosses
    create checkWin function
    create checkLetters function to see if user guessed correct letter
    add an event listener for the keydown (not click) 


NOTE:
remember .includes, .join, .split, toLowercase