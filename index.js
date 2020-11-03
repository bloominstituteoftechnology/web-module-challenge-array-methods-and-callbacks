import { fifaData } from './fifa.js';
// const fifaData = require("./fifaData");
// module.exports = fifaData;

console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

var i;
for (i = 0; i < fifaData.length; i++){
    if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final"){
        console.log(fifaData[i]["Home Team Name"]);
        console.log(fifaData[i]["Away Team Name"]);
        console.log(fifaData[i]["Home Team Goals"]);
        console.log(fifaData[i]["Away Team Goals"]);
        let winner;
        if (fifaData[i]["Home Team Goals"] < fifaData[i]["Away Team Goals"]){
            winner = fifaData[i]["Away Team Name"];
        }
        else {
            winner = fifaData[i]["Home Team Name"];
        }
        console.log(winner)
    }
}


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(obj => obj.Stage === "Final")

};

getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, cb) {
    let dataset = cb(data);
    let years = [];
    for (i=0; i < dataset.length; i++){
        years.push(dataset[i].Year)
    }

    return years
};

getYears(fifaData, getFinals);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    let winners = []

    for (i = 0; i < cb.length; i++){
        if (cb[i]["Away Team Goals"] > cb[i]["Home Team Goals"]){
            winners.push(cb[i]["Away Team Name"])
        }
        else {
            winners.push(cb[i]["Home Team Name"])
        }
    }
    
    return winners;
};

getWinners(getFinals(fifaData))

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    let yearsWon = []

    for (i = 0; i < cbWinners.length && i < cbYears.length; i++){
        yearsWon.push(`In ${cbYears[i]}, ${cbWinners[i]} won the world cup!`)
    }
    return yearsWon;
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(fifaData, getFinals));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeScores = data.map(x => x["Home Team Goals"])
    let awayScores = data.map(x => x["Away Team Goals"])
    
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let avgHome = 0;
    let avgAway = 0;
    avgHome = (homeScores.reduce(reducer) / homeScores.length)
    avgAway = (awayScores.reduce(reducer) / awayScores.length)

    return `Average Home Scores: ${avgHome}. Average Away Scores: ${avgAway}`;

};

getAverageGoals(fifaData)

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
