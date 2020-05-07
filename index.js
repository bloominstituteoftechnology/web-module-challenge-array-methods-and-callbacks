import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following 
pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log("Home Team Name")
console.log("Away Team Name")
console.log("Home Team Goals")
console.log("Away Team Goals")
console.log("Win Conditions")

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array 
of objects with only finals data */

function getFinals(fifaData)  {
    array[fifaData].finals
};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function 
`getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
 return years()
};

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts 
the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. R
eturn the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
getWinners["Win Conditions"]
};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following 
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getYears) {
  "In ${year}, ${country} won the world cup!"
};

getWinnersByYear();
getYears();

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and 
`team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(fifaData) {

   console.log()

}; 
getCountryWins();

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and 
returns the the average number of home team goals and away team goals scored per match
 (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(fifaData) {

};

getAverageGoals();


/// STRETCH  //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
