import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("it's working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldCupFinal2014 = fifaData.filter((data) => data.Year === 2014 && data.Stage === "Final");

console.log("World Cup 2014 Final: ", worldCupFinal2014);

console.log("Home Team: ", worldCupFinal2014[0]["Home Team Name"]);
   
console.log("Away Team: ", worldCupFinal2014[0]["Away Team Name:"]);

console.log("Home Team Goals: ", worldCupFinal2014[0]["Home Team Goals"]);

console.log("Away Team Goals: ", worldCupFinal2014[0]["Away Team Goals"]);

console.log("Winner: ", worldCupFinal2014[0]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const allFinalsData = data.filter((item) => item.Stage === "Final");
    return allFinalsData;
}

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  const dataArray = callback(fifaData);
  const years = dataArray.map((item) => item.Year);
  return years;
}

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const dataArray = callback(fifaData);
    const winners= dataArray.map((item) => {
        if (item["Home Team Goals"] === item["Away Team Goals"]) {
          return item["Win conditions"].includes(item["Home Team Name"])
            ? item["Home Team Name"]
            : item["Away Team Name"];
        } else {
          return item["Home Team Goals"] > item["Away Team Goals"]
            ? item["Home Team Name"]
            : item["Away Team Name"];
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

function getWinnersByYear(callBackWinners, callBackYears) {
    const years = callBackYears(getFinals);
    const winners = callBackWinners(getFinals);
    const returnWinners = winners.forEach((item, index) => {
        console.log('In ${years[index]}, ${item} won the World Cup!');
    });

    return returnWinners;
}

getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   let averageHomeGoals = data.reduce((accumulator, index) => accumulator + index["Home Team Goals"], 0);
   let averageAwayGoals = data.reduce((accumulator, index) => accumulator + index["Away Team Goals"], 0);

averageHomeGoals = averageHomeGoals / data.length;
averageAwayGoals = averageAwayGoals / data.length;

const stringToReturn = 'Average Home Goals: ${averageHomeGoals} - Average Away Goals: ${averageAwayGoals}';
return stringToReturn
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const teamInfo = data.filter(
        (item) => item["Away Team Initials"] === teamInitials || item["Home Team "] === teamInitials);
    if (teamInfo.length === 0) {
        return 'No team with "${teamInitials}" initials found.';
    }
    const teamName = teamInfo.map((item) => {
        return item["Away Team Initials"] === teamInitials ? item["Away Team Name"] : item["Home Team Name"];
    });
    
    const winners = teamInfo.map((item) => {
        if (item["Home Team Goals"] === item["Away Team Goals"]) {
            return item["Win conditions"].includes(item["Home Team Name"])
            ? item["Home Team Name"]
            : item["Away Team Name"];
        } else {
            return item["Home Team Goals"] > item["Away Team Goals"]
            ? item["Home Team Name"]
            : item["Away Team Name"];
        }
    });

    let teamWins = winners.filter((item) => item.includes(teamName[0]));
    teamWins = teamWins.length

    const winnerString = '${teamName[0]} got ${teamWins} wins';

    return winnerString
   }

    console.log(getCountryWins(fifaData, "SWE"));



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
