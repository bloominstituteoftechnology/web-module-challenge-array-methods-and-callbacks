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
let worldCup2014Final = fifaData[828]
console.log(worldCup2014Final['Home Team Name']);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// let finalsMatches = fifaData.filter(function(data){
// return data.stage === 'finals';
// });
// getFinals();
// console.log(finalsMatches);
function getFinals(data){
    const finalsOnly = data.filter((item) => item['Stage'] === 'Final')
    return finalsOnly
}
console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

//     const getYears = () => { let years = fifaData.filter(getFinals(item3){
//         return item3.years
//     }) 
//     };
// // getYears();
function getYears(data,everyYear){
let finalYears = everyYear(data)
let getFinalYears = finalYears.map(function(item){
    return item['Year']
})
return getFinalYears
}
console.log(getYears(fifaData,getFinals))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data,everyWinner) {
let allWinners = everyWinner(data)
let getAllWinners = allWinners.filter(function(item){
    return item['Win conditions']
})
return getAllWinners

};
console.log(getWinners(fifaData,getFinals));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(param1,param2) {
    return `In ${param1}, ${param2} won the world cup!`;
};

getWinnersByYear(getYears,getWinners);
console.log(getWinnersByYear)


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
