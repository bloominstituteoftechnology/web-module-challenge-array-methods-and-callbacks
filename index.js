import { fifaData } from "/fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

// console.log(fifaData[{"Home Team Name"}{"Stage": "Final"}{"Year": 2014}];

// aray doesn't have a key : value pair relationship
// instead array has indexes and values (elements)

fifaData.forEach((match) => {
  if (match.Year === 2014 && match.Stage === "Final") {
    //(a) Home Team name for 2014 world cup final
    console.log(`${match.Year} - ${match.Stage}`);
    console.log(`a) Home team name: `, match["Home Team Name"]);
    //(b) Away Team name for 2014 world cup final
    console.log(`b) Away team name: `, match["Away Team Name"]);
    //(c) Home Team goals for 2014 world cup final
    console.log(`c) Home team goals: `, match["Home Team Goals"]);
    //(d) Away Team goals for 2014 world cup final
    console.log(`d) Away team goals: `, match["Away Team Goals"]);
    //(e) Winner of 2014 world cup final
    const homeGoals = match["Home Team Goals"];
    const awayGoals = match["Away Team Goals"];
    let winner;
    if (homeGoals > awayGoals) winner = match["Home Team Name"];
    else if (homeGoals < awayGoals) winner = match["Away Team Name"];
    else winner = "It's a tie";

    console.log(`e) Winner: `, winner);
  }
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(worldCupData) {
  let finalsData = worldCupData.filter(function (game) {
    return game.Stage === "Final";
  });
  return finalsData;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCallback) {
  const finalsData = getFinalsCallback;
  const finalsYears = finalsData.map(function (finalsGames) {
    return finalsGames.Year;
  });
  return finalsYears;
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinalsCallback) {
  const finalsData = getFinalsCallback;
  const finalsWinners = finalsData.map(function (finalsGames) {
    let homeTeamGoals = finalsGames["Home Team Goals"];
    let awayTeamGoals = finalsGames["Away Team Goals"];
    let winningGoals = Math.max(homeTeamGoals, awayTeamGoals);
    if (homeTeamGoals === awayTeamGoals) {
      return finalsGames["Win conditions"];
    } else if (homeTeamGoals === winningGoals) {
      return finalsGames["Home Team Name"];
    } else {
      return finalsGames["Away Team Name"];
    }
  });
  return finalsWinners;
}

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
Parameters: 
* callback function getWinners
* callback function getYears
*/

function getWinnersByYear(getWinnersCallback, getYearsCallback) {
  const years = getYearsCallback;
  const winners = getWinnersCallback;
  const winnersByYear = [];
  for (let i = 0; i < winners.length; i++) {
    if (winners[i].toLowerCase().includes("penalties")) {
      winnersByYear.push(`In ${years[i]}, ${winners[i]}!`);
    } else {
      winnersByYear.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
  }
  return winnersByYear;
}

console.log(
  getWinnersByYear(
    getWinners(getFinals(fifaData)),
    getYears(getFinals(fifaData))
  )
);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(matchData) {
  let averageGoals =
    matchData.reduce(
      (sum, games) =>
        sum + (games["Home Team Goals"] + games["Away Team Goals"]),
      0
    ) / matchData.length;
  return averageGoals;
}

console.log(getAverageGoals(fifaData));

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
