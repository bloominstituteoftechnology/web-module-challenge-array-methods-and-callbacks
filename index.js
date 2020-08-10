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

console.log(fifaData[828]["Home Team Name"])
console.log(fifaData[828]["Away Team Name"])
console.log(fifaData[828]["Home Team Goals"])
console.log(fifaData[828]["Away Team Goals"])
console.log(fifaData[828]["Win conditions"])

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.Stage == "Final";
};
function filter(){
    return fifaData.filter(getFinals);
}
console.log(filter(getFinals(fifaData)));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = [];
    callback.forEach(element => {
        years.push(element.Year);
    });
    return years;
};

console.log(getYears(filter()));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
    callback.forEach(element =>{
        if (element["Away Team Goals"] >  element["Home Team Goals"]){
            winners.push(element["Away Team Name"]);         
        }
        else if (element["Away Team Goals"] <  element["Home Team Goals"]){
            winners.push(element["Home Team Name"]);
        }
    })
    return winners;
};

console.log(getWinners(filter()));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackWinners, callbackYears) {
    let winnerPerYear = [];
    for (let i = 0 ; i <= callbackYears.length ; i++){
        winnerPerYear.push(`In ${callbackYears[i]}, ${callbackWinners[i]} won the world cup!`);
    }
    return winnerPerYear;
};

console.log(getWinnersByYear(getWinners(filter()),filter()));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {

    const totalHomeGoals = array.reduce((total, item) => {return total + item["Home Team Goals"];}, 0);
    const totalAwayGoals = array.reduce((total, item) => {return total + item["Away Team Goals"];}, 0);
    return `Home Average Goals: ${totalHomeGoals/851} : Away Avarage Goals ${totalAwayGoals/851}`
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, TeamInitials) {
    let NumWins = 0;
    data.forEach(element =>{
        if (element["Away Team Goals"] >  element["Home Team Goals"] && element["Away Team Initials"] == TeamInitials){
            NumWins+=1;         
        }
        else if (element["Away Team Goals"] <  element["Home Team Goals"]&& element["Home Team Initials"] == TeamInitials){
            NumWins+=1;
        }
    })
    return `The team ${TeamInitials} has won ${NumWins} finals.`;

};

console.log(getCountryWins(fifaData,"USA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
