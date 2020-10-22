import { fifaData } from './fifa.js';
console.log(fifaData);
console.log('its working');
//The import statement above imports fifa.js which holds the data needed for today's tasks
//SUGGESTION: open up fifa.js and get familiar with the data and how it's organized

// ⚽️ M V P ⚽️ //

/* 
REMEMBER: Add the "LIVE server" extension to Visual Studio Code and use it for this project:

https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer 

If it's not used, you won't have access to the fifa.js data since the import statement 
above needs an environment with a server to work properly.
*/

/* Task 1: Access the Data

Practice accessing the fifa data by console.log-ing the following:
    1. Home Team name for 2014 World Cup Final
    2. Away Team name for 2014 World Cup Final
    3. Home Team goals for 2014 World Cup Final
    4. Away Team goals for 2014 World Cup Final
    5. Winner of 2014 World Cup Final 

HINT: There is a lot of data to go through so think of ways you can narrow it down
*/

/* Task 2: Get Finals

Use the `getFinals` function below to do the following:
    1. Receive fifaData in a parameter 
    2. Return an array of objects containing all of the finals games data
    
NOTE: The finals games have the stage of "Final" - ignore quarter-final, semi-final etc.
*/

function getFinals(/* code here */) {

    /* code here */

};

/* Task 3: Get Years

Use the higher-order function `getYears` below to do the following:
    1. Receive fifaData in a parameter
    2. Receive in a parameter the callback function `getFinals()` created in Task 2
    3. Return an array called `years` containing the years the finals were played
*/

function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 4: Get Winners

Use the higher-order function `getWinners` below to do the following:
    1. Receive fifaData in a parameter
    2. Receive in a parameter the callback function `getFinals()` created in Task 2
    3. Determine the winner (home or away) of each `finals` game
    4. Return an array called `winners` that contains the names of all the countries that won 
*/ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 5: Get Winners By Year

Use the higher-order function `getWinnersByYear` below to do the following:
    1. Receive fifaData in a parameter
    2. Receive in a parameter the callback function `getYears()` created in Task 3
    3. Receive in a parameter the callback function `getWinners()` created in Task 4
    4. Using the data returned by the callback functions, return an array containing 
       a set of strings that say: "In {year}, {country} won the world cup!"
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Get Average Goals

Use the function `getAverageGoals` below to do the following:
    1. Receive fifaData in a parameter
    2. Return the the average number of goals (home and away goals combined) scored from ALL the matches
    
HINT: use .reduce and do this in 2 steps
*/

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Get Country Wins

Use the function `getCountryWins` below to do the following:
    1. Receive fifaData in a parameter
    2. Receive a team initials string in a parameter
    3. Return the number of world cup wins that country has had 

Hint: Investigate your data to find "team initials"!
Hint: use .reduce 

*/

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 2: Get Goals

Use the function `getGoals` below to do the following:
    1. Receive fifaData in a parameter
    2. Return the team with the most goals scored per appearance (average goals for) in the World Cup finals 
*/

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 3: Bad Defense

Use the function `badDefense` below to do the following:
    1. Receive fifaData in a parameter
    2. Return the team with the most goals scored against them per appearance (average goals against) in the World Cup finals 
*/

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
