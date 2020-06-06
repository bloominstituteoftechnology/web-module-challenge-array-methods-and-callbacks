
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

let finalHomeTeamName = fifaData.filter((home) => {
    return home.Year == "2014" && home.Stage == "Final";
});
console.log(finalHomeTeamName);
console.log(finalHomeTeamName[0]["Home Team Name"]);
console.log(finalHomeTeamName[0]["Away Team Name"]);
console.log(finalHomeTeamName[0]["Home Team Goals"]);
console.log(finalHomeTeamName[0]["Away Team Goals"]);

function getWinner() {
    if (finalHomeTeamName[0]["Home Team Goals"] > finalHomeTeamName[0]["Away Team Goals"]) {
        console.log(finalHomeTeamName[0]["Home Team Name"]);
    } else {
        console.log(finalHomeTeamName[0]["Away Team Name"]);
    }
}
getWinner();

// let finalsData = fifaData.filter((banana) => {
//     return banana.Stage == "Final";
// });
// console.log(finalsData);

// function getWinnerForFinals() {
//     let finalsWinningName = [];
//     for (let i = 0; i < finalsData.length; i++)
//         if (finalsData["Home Team Goals"] > finalsData["Away Team Goals"]) {
//         return finalsData["Home Team Name"];
//     } else {
//         return finalsData["Away Team Name"];
//     }
//     console.log(finalsWinningName);
// }
// getWinnerForFinals();

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
    
    return fifaData.filter(
        (final) => final["Stage"] == "Final"
      );
    }
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    return callback(data).map(
        (year) => year.Year
    );
}
console.log(getYears(getFinals, fifaData));



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinningTeam(obj) {
    if (obj["Home Team Goals"] > obj["Away Team Goals"]) {
        return obj["Home Team Name"];
    }
    else { return obj["Away Team Name"]}
}

function getWinners(callback, data) {

   return callback(data).map(
       (winning) => getWinningTeam(winning)
   );
    }
    console.log(getWinners(getFinals, fifaData));



// const mappedCityStates = data.map((state) => {
//     return {'city': state.city, 'state': state.state};
//   });

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(callback, cb, data) {

//     return callback(data"In " + cb + ", " + callback + " won the World Cup!";
// };

// console.log(getWinnersByYear(getWinners, getYears, fifaData));

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
