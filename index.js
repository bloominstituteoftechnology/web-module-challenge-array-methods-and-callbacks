import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //
//Assistant 1: "CRISTOPHE Henry (BEL)"
// Assistant 2: "REGO Gilberto (BRA)"
// Attendance: 4444
// Away Team Goals: 1
// Away Team Initials: "MEX"
// Away Team Name: "Mexico"
// City: "Montevideo"
// Datetime: "13 Jul 1930 - 15:00"
// Half-time Away Goals: 0
// Half-time Home Goals: 3
// Home Team Goals: 4
// Home Team Initials: "FRA"
// Home Team Name: "France"
// MatchID: 1096
// Referee: "LOMBARDI Domingo (URU)"
// RoundID: 201
// Stadium: "Pocitos"
// Stage: "Group 1"
// Win conditions: ""
// Year: 1930
// __proto__: Object
// 1: {Year: 1930, Datetime: "13 Jul 1930 - 15:00", Stage: "Group 4", Stadium: "Parq

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const fifaTeams = [];

fifaData.forEach(function(x){
    return fifaTeams.push(`${x["Year"]}, ${x["Home Team Name"]}, ${x["Away Team name"]}`);
  });
  
  console.log(fifaTeams);
  


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

 function getfinals(x){
        const getFinals = fifaData.push(`${x["finals"]}`);
    return getfinals(x)
};
      
    

console.log(getFinals(x));   


 

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

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

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

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
