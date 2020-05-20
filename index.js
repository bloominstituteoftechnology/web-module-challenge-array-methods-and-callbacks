import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

// DID NOT COMPLETE. WILL NEED ADDITIONAL TIME.
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let i;
function homeTeamA(fifaData){

    for(i = 0; i <= fifaData.length - 1; i++) {
        if((fifaData[i].Year === 2014) && (fifaData[i].Stage === 'Final')) {
            let fifaDataA = fifaData[i];
            if(fifaDataA['Home Team Goals'] > fifaDataA['Away Team Goals']) {
                var winnerA = fifaDataA['Home Team Name'];
            } else {
                var winnerA = fifaDataA['Away Team Name'];
            }
            if(fifaDataA['Home Team Goals'] === 1) {
            var pluralOrSingularA = 'goal'; // uses proper speech for 1 goal (singular)
            } else {
                var pluralOrSingularA = 'goals'; // uses proper speech for 0, or 2 and up goals (plural)
            }
            if(fifaDataA['Away Team Goals'] === 1) {
                var pluralOrSingularB = 'goal';
            } else {
                var pluralOrSingularB = 'goals';
            }
            return `Home Team: ${fifaDataA['Home Team Name']} scored ${fifaDataA['Home Team Goals']} ${pluralOrSingularA} and Away Team: ${fifaDataA['Away Team Name']} scored ${fifaDataA['Away Team Goals']} ${pluralOrSingularB}. ${winnerA} won the game`;
        }
    }
};
console.log(homeTeamA(fifaData));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only
finals data */

const finalsData = [];

function getFinals(fifaData) {

    for(i = 0; i <= fifaData.length - 1; i++) {
        if(fifaData[i].Stage === 'Final') {
            finalsData.push(fifaData[i]);
        }
    }
    return finalsData;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns
an array called `years` containing all of the years in the dataset */
// http://127.0.0.1:5500/

const theYears = [];

function getYears(fifaData) {

    for(i = 0; i <= fifaData.length - 1; i++) {
        if(fifaData[i].Stage === 'Final') {
            theYears.push(fifaData[i].Year);
        }
    }
    return theYears;
};

console.log(getYears(fifaData));

// Could not complete Task 3 using a callback function. Completed it this way in order to move on.

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and
determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called
`winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
