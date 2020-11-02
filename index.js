//import { fifaData } from './fifa.js';
//console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final  "Home Team Name": "Germany", 
(b) Away Team name for 2014 world cup final    "Away Team Name": "Argentina", 
(c) Home Team goals for 2014 world cup final    "Home Team Goals": 1,
(d) Away Team goals for 2014 world cup final    "Away Team Goals": 0,
(e) Winner of 2014 world cup final */           //"Win conditions": "Germany win after extra time" 


let finalIndex2014 = [];
fifaData.forEach(function(item, index){
    if (item.Stage === "Final" && item.Year === 2014) {
         finalIndex2014.push(index); 
    }
})

console.log(finalIndex2014);
console.log(`The Home Team name for the 2014 World Cup final : ${fifaData[828]["Home Team Name"]}`);
console.log(`The Away Team name for the 2014 World Cup final:  ${fifaData[828]["Away Team Name"]}`);
console.log(`Home Team Goals for 2014 Cup Final: ${fifaData[828]["Home Team Goals"]}`);
console.log(`Away Team Goals for 2014 Cup Final: ${fifaData[828]["Away Team Goals"]}`);
console.log(`Winner of the 2014 Cup Final: ${fifaData[828]["Win conditions"]}`);






/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

//function getFinals(data) {

//    return  = []

//};

//const arrayOfFinals = array.map(callBackFunction(item){
   // return item.Stage === 'finals';
//});
//[console.log(arrayOfFinals)

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
