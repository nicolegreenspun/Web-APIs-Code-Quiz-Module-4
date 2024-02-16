## PSEUDOCODE

Write an index.html & script.js files

link the script.js to your index.html

in the script.js
    write the vars at the top for wins, losses, and ties and assign them to 0
    create the array of options for the computer. R, P, S are good enough
    create the function to play game
        Ask user for their choice
        If user pressed Cancel, immediately end function (return;)
        Convert user input to uppercase to make comparisons easier
        Get random index from array of options (google for the JS Math Docs)
            Hint: requires Math.floor, Math.random look them up and the array's length
        Alert the user of the computer's choice
        create the ifelses for the combinations of user vs computer
            alert the user the game situation (win, T, loss)
            increment the wins,losses,ties accordingly
        Alert with stats (W,L,T)
        Ask user to play again
            if yes then play again
            if not then return

    Dont forget to actually invoke the game

    LOOK UP/google/read the docs:
    window.alert, window.prompt, js toUpperCase, Math.floor, Math.random



