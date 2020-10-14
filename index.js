import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

*/
fifaData.map((item, index) => {
  if (item["Year"] === 2014 && item["Stage"] === "Final") console.log(item);
});

console.log(finals2014[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log(finals2014[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(finals2014[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(finals2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final
console.log(finals2014[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((item) => item["Stage"] === "Final");
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(arr) {
  return arr(fifaData).map((item) => item["Year"]);
}
console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(arr) {
  return arr(fifaData).map((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"])
      return item["Home Team Name"];
    return item["Away Team Name"];
  });
}
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 


Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
  const countries = winners(getFinals);
  const dates = years(getFinals);
  return dates.map(
    (item, index) => `In ${item}, ${countries[index]} won the world cup!`
  );
}
console.log(getWinnersByYear(getWinners, getYears));

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
