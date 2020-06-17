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

/*(a) Home Team name for 2014 world cup final - Germany */

let home2014 = fifaData.filter((game) => {
    if (game["Year"] === 2014 && game["Stage"] === "Final") {
    console.log(game["Home Team Name"]);
    }
});

/*(b) Away Team name for 2014 world cup final - Argentina */

let away2014 = fifaData.filter((game) => {
    if (game["Year"] === 2014 && game["Stage"] === "Final") {
    console.log(game["Away Team Name"]);
    }
});

/*(c) Home Team goals for 2014 world cup final - 1*/

let homeGoals2014 = fifaData.filter((game) => {
    if (game["Year"] === 2014 && game["Stage"] === "Final") {
    console.log(game["Home Team Goals"]);
    }
});

/*(d) Away Team goals for 2014 world cup final - 0*/

let awayGoals2014 = fifaData.filter((game) => {
    if (game["Year"] === 2014 && game["Stage"] === "Final") {
    console.log(game["Away Team Goals"]);
    }
});

/*(e) Winner of 2014 world cup final */
let finalWinner2014 = fifaData.filter((game) => {
    if (game["Year"] === 2014 && game ["Stage"] === "Final"){
        console.log(game["Win conditions"]);
    }
});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const years = data.filter(function(item) {
        return item['Stage'] === 'Final';
    })
    return years;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    let years = [];
    callback(data).map(game=>{
        years.push(game.Year);
    });
    return years;
    };
    
    console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, data) {
    let games = callback(data);
    let winners = [];
    games.map(game => {
        if (game ['Home Team Goals'] === game['Away Team Goals']){
            let winner = game['Win conditions'].substr(0, game['Win conditions'].indexOf('w'));
            winners.push(winner);
        } else if (game['Home Team Goals'] > game['Away Team Goals']){
            winners.push(game['Home Team Name']);
        } else {
            winners.push(game['Away Team Name']);
        }
    });
    return winners;
    };
    
    console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    let winners = callback1(getFinals, fifaData);
    let years = callback2(getFinals, fifaData);
    let onlyWinners = [];
    for(let i = 0; i < winners.length; i++){
        onlyWinners.push(`In ${years[i]}, ${winners[i]} won the World Cup!`);
    }
    
    return onlyWinners;
    };
    
    console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let avgHomeTeamGoals = data.reduce((goals, game, index)=>{
        return goals + game['Home Team Goals'];
    },0);
    avgHomeTeamGoals /= data.length;
    
    let avgAwayTeamGoals = data.reduce((goals, game, index)=>{  
        return goals + game['Away Team Goals'];
    },0);
    avgAwayTeamGoals = avgAwayTeamGoals / data.length;
    
    return {
        avgHomeTeamGoals,
        avgAwayTeamGoals
    }
    };
    console.log(getAverageGoals(fifaData));

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
