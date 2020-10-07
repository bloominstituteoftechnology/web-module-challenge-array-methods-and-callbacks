//import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let final2014 = fifaData.find(game => {
    return game.Stage == "Final" && game.Year == 2014
});

console.log(final2014["Home Team Name"]);

console.log(final2014["Away Team Name"]);

console.log(final2014["Home Team Goals"]);

console.log(final2014["Away Team Goals"]);

if (final2014["Home Team Goals"] > final2014["Away Team Goals"]) {
    console.log(`${final2014["Home Team Name"]} wins!`)
}
else if (final2014["Home Team Goals"] < final2014["Away Team Goals"]) {
    console.log(`${final2014["Away Team Name"]} wins!`)
}


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {

    return array.filter((game) => {
        return game.Stage == "Final"
    });

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array) {
    let yearsArray = [];
    array.forEach((game) => {
        if (yearsArray.find(year => {
            return game.Year == year
        }) == undefined) {
            yearsArray.push(game.Year)
        }
    })
    return yearsArray
};

console.log(getYears(fifaData))


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
    let finalGames = callback(fifaData)
    let winnersArr = [];
    finalGames.forEach((game) => {
        if (game["Home Team Goals"] > game["Away Team Goals"]) {
            winnersArr.push(game["Home Team Name"])

        }
        else if (game["Home Team Goals"] < game["Away Team Goals"]) {
            winnersArr.push(game["Away Team Name"])
        }
    });
    return winnersArr;
}

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
 
Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    const year = getYears(fifaData);
    const winners = getWinners(getFinals);
    winners.forEach((winner, index) => {
        console.log(`"In year ${year[index]}, ${winner} won the world cup!"`)
    })
};

getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let total = data.reduce((totalGoals, game) => {
        totalGoals.totalAway += game["Away Team Goals"];
        totalGoals.totalHome += game["Home Team Goals"];
            return totalGoals;
    }, {totalAway: 0, totalHome: 0})
    let averageAway = total.totalAway / data.length
    let averageHome = total.totalHome / data.length
        return {averageAway, averageHome}
    
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
