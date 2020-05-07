import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function findGame(games) {
    for (var i = 0; i < games.length; i++) {
        let game = games[i];
        if (game['Year'] === 2014 && game['Stage'] === 'Final') {
            return games.indexOf(game);
        }
    }
}

console.log(findGame(fifaData));

console.log(fifaData[828]['Home Team Name']);
console.log(fifaData[828]['Away Team Name']);
console.log(fifaData[828]['Home Team Goals']);
console.log(fifaData[828]['Away Team Goals']);
console.log(fifaData[828]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr) {
    const finalsArr = arr.filter(obj => obj['Stage'] === 'Final')
    return finalsArr;
};

const output = getFinals(fifaData);
console.log(output);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(years) {
    const finalYears = years.map(obj => obj['Year']);
    return finalYears;
};

const output2 = getYears(getFinals(fifaData));
console.log(output2);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsArr) {
    const winners = finalsArr.map(obj => {
        if (obj['Home Team Goals'] > obj['Away Team Goals']) {
            return obj['Home Team Name'];
        } else {
            return obj['Away Team Name'];
        }
    });

    return winners;
};

const output3 = getWinners(getFinals(fifaData));
console.log(output3);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(finalWinners, finalYears) {
    const message = finalYears.map((year, country) => {
        return `In ${year}, ${finalWinners[country]} won the world cup!`;
    });

    return message;
};

const output4 = getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));
console.log(output4);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const totalWins = data.reduce((acc, obj) => {
        const winCondition = obj['Home Team Goals'] > obj['Away Team Goals'];
        let key = obj['Home Team Initials'];

        winCondition ? acc + 1 : obj, 0;
        if (!acc[key]) {
            acc[key] = 0;
        }
        if (winCondition) {
            acc[key]++;
        } else {
            acc[obj[['Home Team Initials']]]++;
        }

        return acc;
    }, {})[teamInitials];

    return `${teamInitials} has had ${totalWins} World Cup wins.`;
};

const output5 = getCountryWins(getFinals(fifaData), 'ITA');
console.log(output5);

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    for (var i = 0; i < data.length; i++) {
        let currentMatch = data[i];
        
        let homeGoals = currentMatch['Home Team Goals'];
        let awayGoals = currentMatch['Away Team Goals'];

        // https://captaincalculator.com/sports/goals-against-average-calculator/
        let homeAverage = (awayGoals / 637) * 90;
        let awayAverage = (homeGoals / 637) * 90;

        console.log(`Home average: ${homeAverage.toFixed(3)}, Away average: ${awayAverage.toFixed(3)}.`);
    }
};

const output6 = getAverageGoals(fifaData);
// console.log(output6);
output6;


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
