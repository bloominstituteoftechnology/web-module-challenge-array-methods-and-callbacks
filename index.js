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

// (a.) // 
// function t4teen(data) {
//     data.map((oneLvl) => {
//       if (oneLvl.Year === 2014 && oneLvl.Stage === "Final") {
//         console.log("Task 1 with ternary and map and in a function", {
//           Home: oneLvl["Home Team Name"],
//           Away: oneLvl["Away Team Name"],
//           "Home Goals": oneLvl["Home Team Goals"],
//           "Away Goals": oneLvl["Away Team Goals"],
//           Winner: oneLvl["Win conditions"],
//         });
//       }
//     });
//   }
//   t4teen(fifaData);
// let game = fifaData.filter(
//     (c) => c["Year"] == 2014 && c["Stage"] == "Final"
//   )[0];
//   console.log("task 1 with filter and ternary--->", {
//     Home: game["Home Team Name"],
//     Away: game["Away Team Name"],
//     "Home Goals": game["Home Team Goals"],
//     "Away Goals": game["Away Team Goals"],
//     Winner:
//       game["Home Team Goals"] > game["Away Team Goals"]
//         ? game["Home Team Name"]
//         : game["Away Team Name"],
//   });


// const fourteen = fifaData.find(game => game.Year === 2014 && game.Stage === "Final")
// console.log(`The Home Team was: ${fourteen["Home Team Name"]} the Away Team was: ${fourteen["Away Team Name"]}`);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// FUNCTION that searches the array for objects that fullfil the requirement of being a FINALS GAME, and returns an array with those games' data. 

// function getFinals = fifaData.filter(function(element) {
//     return element([stage] === 'Final');
// });
// console.log(getFinals);

function getFinals(data) {
    return data.filter(game => game["Stage"] === "Final")
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let years = cb.map(game => game["Year"])
    return years
}; 
console.log(getYears(getFinals(fifaData)));



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    let winners = callBack.map(game => {if(game["Home Team Goals"] > game["Away Team Goals"]){
        return game["Home Team Name"] 
    }else {
            return game["Away Team Name"]
        }})
        return winners
    }; 
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(functWin, functYear) {
    let winner = functWin(getFinals(fifaData));
    let years = functYear(getFinals(fifaData));
    let string = [];

    for(let i = 0; i < winner.length; i++){
        string.push(`In the year ${years[i]}, ${winner[i]} won the FIFA World Cup Final.`)
    }
    return string;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let avgHome = data.reduce(function(accumulator, item){
        return accumulator + item["Home Team Goals"]
    }, 0)
    let avgAway = data.reduce(function(accumulator, item){
        return accumulator + item["Away Team Goals"]
    }, 0)
return {
    "Home average":(avgHome / data.length).toFixed(2),
    "Away average":(avgAway / data.length).toFixed(2)
};
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