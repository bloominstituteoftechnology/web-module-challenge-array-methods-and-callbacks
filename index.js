import { fifaData } from "./fifa.js";
//console.log(fifaData);

console.log("it's working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldCupFInal2014 = fifaData.filter((el, i) => {
    return el.Year === 2014 && el.Stage === "Final";
})[0];

console.log("Home Team: " + worldCupFinal2014["Home Team Name"]);
   
console.log("Away Team: " + worldCupFinal2014["Away Team Name:"]);

console.log("Home Team Goals: " + worldCupFinal2014["Home Team Goals"]);

console.log("Away Team Goals: " + worldCupFinal2014["Away Team Goals"]);

console.log("Winner: " + worldCupFinal2014{"Win conditions"});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((el, i) => {
        return el.Stage === "Final";
    });

}

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(myFunc) {
  const years=myFunc(fifaData).map((element) => {
    return element.Year;
  });
  return years;
}

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(myFunc) {
    const winners=myFunc(fifaData).map((element, 1) => {
        if (element["Home Team Goals"] === element["Away Team Goals"])
          return element["Wn conditions"].split("")[0];
        if (element["Home Team Goals"] > element["Away Team Goals"])
          return element["Home Team Name"];
        else return element["Away Team Name"];
    });
    return winners;
}

console.log(getWinners(getFinals));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getYearsFunc, getWinnersFunc) {
    const years = getYearsFunc(getFinals);
    const winners = getWinnersFunc(getFinals);
    const stringSet = years.map((element, i) => {
        return 'In ${element}, ${winners[i]} won the World Cup!';
    });

    return stringSet
}

console.log(getWinnersByYear(getYears, getWinners));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const goalsPerMatch = data.map((element, i) => {
        return element["Home Team Goals"] + element["Away Team Goals"];
    });

    const averageGoalsPerMatch =
      goalsPerMatch.reduce((sum, element) => {
          return (sum += element);
      }, 0) / goalsPerMatch.length;
    return averageGoalsPerMatch;
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const winners = getFinals(data).map((element, i) => {
        if (element["Home Team Goals"] === element["Away Team Goals"])
          if (element["Win Conditions"].split(" ")[0] === element["Home Team Name"])
            return element["Home Team Initials"];
          else return element["Away Team Initials"];
        if (element["Home Team Goals"] > element["Away Team Goals"])
          return element["Home Team Initials"];
        else return element["Away Team Initials"];
    });

    const wins = winners.reduce((sum, el) => {
        if (teamInitials === el) sum++;
        return sum;
    }, 0);

    return wins;

}

console.log("BRA: " + getCountryWins(fifaData, "BRA"));
console.log("ITA: " + getCountryWins(fifaData, "ITA"));
console.log("ARG: " + getCountryWins(fifaData, "ARG"));
console.log("FRA: " + getCountryWins(fifaData, "FRA"));
console.log("PER: " + getCountryWins(fifaData, "PER"));

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
