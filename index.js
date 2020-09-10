import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//(a)
const yearFinals = fifaData.filter(
  (e) => e.Year === 2014 && e.Stage == "Final"
);
const homeTeamName = yearFinals.map((name) => name["Home Team Name"]);
console.log(homeTeamName);
console.log(yearFinals[0]["Home Team Name"]);

//(b)
const awayTeamName = yearFinals.map((name) => name["Away Team Name"]);
console.log(awayTeamName);

//(c)
const homeGoals = yearFinals.map((goals) => goals["Home Team Goals"]);
console.log(homeGoals);

//(d)
const awayGoals = yearFinals.map((goals) => goals["Away Team Goals"]);
console.log(awayGoals);

//(e)
let winner = [];
if (awayGoals > homeGoals) {
  winner = awayTeamName;
} else {
  winner = homeTeamName;
}
console.log(winner);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  const finals = data.filter(({ Stage }) => Stage === "Final");
  return finals;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finals) {
  const years = finals(fifaData).map(({ Year }) => Year);
  return years;
}

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

// all you need to do is
// 1) compare 2 number values on string " home Team Goals" and "Away Team Goals"
// 2) push the one with the highest number to a new array called Winners.

function getWinners(finals) {
  let winners = [];
  finals(fifaData).forEach((element) => {
    if (element["Home Team Goals"] > element["Away Team Goals"]) {
      winners.push(element["Home Team Name"]);
    } else {
      winners.push(element["Away Team Name"]);
    }
  });
  return winners;
}

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// get an index for years
//return that index to getWinners

function getWinnersByYear(winners, years) {
  let output = [];
  let winningTeam = winners(getFinals);
  let winningYears = years(getFinals);
  winningTeam.forEach((element, index) => {
    const num = winningYears[index];
    // return `In $[num2], $[element] won the world cup!`
    output.push("In " + num + " " + element + " Won the world cup!");
  });
  return output;
}
console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  let goalsHomeTeam = data.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue["Home Team Goals"];
  }, 0);
  return goalsHomeTeam / data.length;
}

console.log(getAverageGoals(fifaData));

// function getAverageGoals(data) {
//   const averageHomeGoals = data.reduce((accumulator, score) => {
//     return accumulator + score["Home Team Goals"];
//   }, 0);
//   const averageAwayGoals = data.reduce((accumulator, score) => {
//     return accumulator + score["Away Team Goals"];
//   }, 0);
//   return `Home: ${averageHomeGoals / data.length}, Away: ${
//     averageAwayGoals / data.length
//   }`;
// }

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
