import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// console.log(fifaData.filter(x => x['Year'] === 2014 && x['Stage'] === 'Final')[0]['Home Team Name']);
// console.log(fifaData.filter(x => x['Year'] === 2014 && x['Stage'] === 'Final')[0]['Away Team Name']);
// console.log(fifaData.filter(x => x['Year'] === 2014 && x['Stage'] === 'Final')[0]['Home Team Goals']);
// console.log(fifaData.filter(x => x['Year'] === 2014 && x['Stage'] === 'Final')[0]['Away Team Goals']);
// console.log(fifaData.filter(x => x['Year'] === 2014 && x['Stage'] === 'Final')[0]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(x => x['Stage'] === 'Final');
};

let finalsArr = getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {
    return data.map(x => x['Year']);
};

let years = getYears(finalsArr);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, type) { //type takes in a str. Either 'Name' or 'Initials'. It will return a list of the full names or initials respectively
    return data.map(x => (x['Home Team Goals'] > x['Away Team Goals']) ? x[`Home Team ${type}`] : x[`Away Team ${type}`]);
};

let winners = getWinners(finalsArr, 'Name');

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
    return winners.map((x, i) => `In ${years[i]}, ${x} won the world cup!`);
};

let strArrWinners = getWinnersByYear(winners, years);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let averageGoals = [];
    averageGoals.push(data.reduce((a, x) => a += x['Home Team Goals'], 0) / data.length); 
    averageGoals.push(data.reduce((a, x) => a += x['Away Team Goals'], 0) / data.length); 
    return averageGoals;
};

getAverageGoals(finalsArr);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryInitials(data){ //returns array with only one instance of each country's initials 
    let singleInstance = [];
    data.forEach(x => (!singleInstance.includes(x['Home Team Initials'])) ? singleInstance.push(x['Home Team Initials']) : null);
    data.forEach(x => (!singleInstance.includes(x['Away Team Initials'])) ? singleInstance.push(x['Away Team Initials']) : null);
    return singleInstance;
}

function getCountryWins(data, countries) {
    let wins = countries.map(x => getWinners(data, 'Initials').filter(val => val === x).length);
    return countries.map((x, i) => `${x}: ${wins[i]} total wins`);
};

console.log(getCountryWins(fifaData, getCountryInitials(fifaData)));


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
