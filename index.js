import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const filterHomeTeam = fifaData.filter(item => item.Year === 2014 && item.Stage === 'Final')
console.log(item["Home Team Name"]);
console.log(filterHomeTeam);

const filterAwayTeam = fifaData.filter(item => item.Year === 2014 && item.Stage === 'Final')
console.log(item["Away Team Name"]);
console.log(filterAwayTeam);

const filterHomeGoals = fifaData.filter(item => item.Year === 2014 && item.Stage === 'Final')
console.log(item["Home Team Goals"]);
console.log(filterHomeGoals);

const filterAwayGoals = fifaData.filter(item => item.Year === 2014 && item.Stage === 'Final')
console.log(item["Away Team Goals"]);
console.log(filterAwayGoals);

const winner = fifaData.filter(item => item.Year === 2014 && item.Stage === 'Final')
if (item["Home Team Goals"] > item["Away Team Goals"]){
    console.log(`${item["Home Team Name"]} won`);
}else{
    console.log(`${item["Away Team Name"]} won`);
}

console.log(winner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalsData = data.filter((item) => {
        if(item.Stage === 'Final')
        return finalsData
});
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {

const years = data.filter(item => item.Years => 1900) 

};

getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(cb1,cb2,cb3,data) {
//     let winners = cb1(cb3,data);
//     let years  = cb2(cb3,data);
//     let winningString = winners.array.forEach((item,index) => {
//         console.log(`in ${item}, ${winners[index]} won the world cup!`)
//     });
// };

// console.log(getWinnersByYear(getWinners, getYears, getFinals, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {
// let avgHomeGoals = math.round(data.reduce((acc ,index) => {return acc + index["Home Team Goals"]/ data.length}, 0))
// let avgAwayGoals = math.round(data.reduce((acc ,index) => {return acc + index["Away Team Goals"]/ data.length}, 0))
// return {home: avgHomeGoals, away: avgAwayGoals}
// };

// console.log(getAverageGoals(getAverageGoals(fifaData)));

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
