import { fifaData } from './fifa.mjs';

//console.log(fifaData);

console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
*/
const homeTeamYear = fifaData.filter(function(element) {
    
    //return element.Year === 2014;
  });
  //console.log(homeTeamYear[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
const awayTeamYear = fifaData.filter(function(element) {
    
   // return element.Year === 2014;
  });
  //console.log(awayTeamYear[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
const homeTeamGoals = fifaData.filter(function(element) {
    
    //return element.Year === 2014;
  });
 // console.log(homeTeamGoals[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
const awayTeamGoals = fifaData.filter(function(element) {
    
    //return element.Year === 2014;
  });
  //console.log(awayTeamGoals[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
const winnerYear = fifaData.filter(function(element) {
    
    //return element.Year === 2014;
  });
  
const winners = []
const winner = winnerYear.map(function(item) {
    //return winners.push(item["Win conditions"].includes("win"))                  
});
//console.log(winner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    finalsData = data.filter(function(element){
    return element.data
    });

};
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

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
