import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let a = fifaData.filter(item => {
    return item.Year === 2014 && item.Stage === 'Final';
});
a = a[0]["Home Team Name"];
console.log(a);
console.clear()
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr) {

    return arr.filter(item =>{
        return item.Stage === 'Final';
    })
};
console.log(getFinals(fifaData));
console.clear();
/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb, arr) {
    const years = [];
    cb(arr).forEach(item => {
        years.push(item.Year);
    })
   return years

};

console.log(getYears(getFinals, fifaData));
console.clear();

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, arr) {
    const winners = [];
    cb(arr).forEach(item => {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"]);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            winners.push(item["Away Team Name"]);
        }else{
            if(item["Win conditions"].includes(item["Home Team Name"])){
                winners.push(item["Home Team Name"]);
            }else{
                winners.push(item["Away Team Name"]);
            }
        }
    })
   return winners
};
console.log(getFinals(fifaData));
console.log(getWinners(getFinals, fifaData));
console.log(getYears(getFinals, fifaData));
console.clear();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    const announceWinners = [];
    const winners = cb1(getFinals, fifaData);
    cb2(getFinals, fifaData).forEach(function(item, ind) {
        announceWinners.push(`In ${item}, ${winners[ind]} won the world cup!`)
        // console.log(item, " ", ind);
    });

    return announceWinners
};

// console.log(getWinnersByYear(getWinners, getYears));
// console.clear()

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
function getWinnersInitials(cb, arr) {
    const winners = [];
    cb(arr).forEach(item => {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Initials"]);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            winners.push(item["Away Team Initials"]);
        }else{
            if(item["Win conditions"].includes(item["Home Team Name"])){
                winners.push(item["Home Team Initials"]);
            }else{
                winners.push(item["Away Team Initials"]);
            }
        }
    })
   return winners
};
// console.log(getWinnersInitials(getFinals, fifaData));

function getCountryWins(arr, country) {

    const totalWins = getWinnersInitials(getFinals, fifaData).reduce((acc, current) => {
        if(country === current){
            return acc + 1;
        }else {
            return acc;
        }
    }, 0)
    return totalWins;
};

// console.log(getCountryWins(fifaData, 'ARG'));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */
console.log(getFinals(fifaData));
function getGoals(arr) {

    const teams = [];
    arr.forEach(item => {
        if(teams.includes(item["Home Team Name"])){
        }else{
            teams.push(item["Home Team Name"])
        }
    });
    console.log(teams);
    const mostG = {};
    const contenders = [];

    
    // return `${teamName}, with a total of: ${totalGoals} has scored the most goals in World Cup Finals`;
};

console.log(getGoals(fifaData));


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(arr) {

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */