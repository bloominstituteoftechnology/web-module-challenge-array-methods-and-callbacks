 import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //
let log = console.log()
/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function filterByYear(array, year) {
    let teamObjNameYear = array.filter(teamName => teamName["Year"] === year);
    let teamObjName = {};
    teamObjName = teamObjNameYear[0];
    return teamObjName;
}

var result = filterByYear(fifaData, 2014);
console.log("(a)" + result["Home Team Name"]);
console.log("(b)" + result["Away Team Name"]);
console.log("(c)" + result["Home Team Goals"]);
console.log("(d)" + result["Away Team Goals"]);

function winnerOfWorldCup(array, year) {
    let winner = filterByYear(array, year);
    if (winner["Home Team Goals"] > winner["Away Team Goals"]) {
        return `(e) ${winner["Home Team Name"]} is the winner of the ${year} World Cup!`
    } else if (winner["Home Team Goals"] < winner["Away Team Goals"]) {
        return `(e) ${winner["Away Team Name"]} is the winner of the ${year} World Cup!`
    }
}
var result = winnerOfWorldCup(fifaData, 2014);
console.log(result);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(finals) {

    let finalsArray = finals.map( onlyFinals => {
        let finalArray = {};
        finalArray["Year"] = onlyFinals["Year"];
        finalArray["Home Team Name"] = onlyFinals["Home Team Name"];
        finalArray["Away Team Name"] = onlyFinals["Away Team Name"];
        finalArray["Home Team Goals"] = onlyFinals["Home Team Goals "];
        finalArray["Away Team Goals"] = onlyFinals["Away Team Goals"];
        return finalArray;
    })
    return finalsArray;
}
var result = getFinals(fifaData);
console.log(result);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(dataset, callback) {
    let finalsArray = getFinals(dataset);
    /* code here */
    let yearsArray = dataset.map( item => {
        let year = 0;
        if (item["Year"] !== undefined) {
            year = item["Year"];
        }
        return year;
    });
    return yearsArray;
}
var result = getYears(fifaData, getFinals);
console.log(result);


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(dataset, callback) {
    let finalsArray = getFinals(dataset);
    /* code here */
    let winners = finalsArray.map( item => {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return item["Home Team Name"];
        } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            return item["Away Team Name"];
        }
    });
    return winners;
}

var result = getWinners(fifaData, getFinals);
console.log(result);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(dataset, cb, cb2) {
    let country = cb(dataset);
    let year = cb2(dataset);

    let winnersClaim = year.map((year, i) => {
        let countries = country[i];
    });
    return winnersClaim.join(" ");
};

var result = getWinnersByYear(fifaData, getWinners, getYears);
console.log(result);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

    function getAverageGoals(data) {
        let avgHome = 0;
        let avgAway = 0;
      
      function getHomeTeamGoals(partial, next) { 
        let entry = next;
        let totalGoals = entry["Home Team Goals"];
        return partial + totalGoals;
      }
      
      function getAwayTeamGoals(partial, next) { 
        let entry = next;
        let totalGoals = entry["Away Team Goals"];
        return partial + totalGoals;
      }

      let totalHome = data.reduce(getHomeTeamGoals, 0);
      let totalAway = data.reduce(getAwayTeamGoals, 0);

      avgHome = totalHome / data.length;
      avgHome = avgHome.toFixed(2);

      avgAway = totalAway / data.length;
      avgAway = avgAway.toFixed(2);

      return `The average home team goals were ${avgHome} per each game. The average for away team goals was ${avgAway} per each game.`
};

let result = getAverageGoals(fifaData);
console.log(result);

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
