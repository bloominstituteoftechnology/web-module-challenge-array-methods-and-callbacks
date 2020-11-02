import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
*/ 

// let twenty14HomeTeam = fifaData.filter((state) => {
//     if (state["Year"] === 2014) {
//         return console.log(state["Home Team Name"]);
//     }
// });


/*
(b) Away Team name for 2014 world cup final
*/

// let twenty14AwayTeam = fifaData.filter((state) => {
//     if (state["Year"] === 2014) {
//         return console.log(state["Away Team Name"]);
//     }
// })

/*
(c) Home Team goals for 2014 world cup final
*/

// let twenty14HomeTeamGoals = fifaData.filter((state) => {
//     if (state["Year"] === 2014) {
//         return console.log(state["Home Team Goals"]);
//     }
// })

/*
(d) Away Team goals for 2014 world cup final
*/

// let twenty14AwayTeamGoals = fifaData.filter((state) => {
//     if (state["Year"] === 2014) {
//         return console.log(state["Away Team Goals"]);
//     }
// })

/*
(e) Winner of 2014 world cup final */

let twenty14 = fifaData.filter((item) => {
    return item["Year"] === 2014;
})


let winner = twenty14.filter((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
        return (item["Home Team Name"]);
    } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
        return (item["Away Team Name"]); 
    }
})

console.log(winner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {
    let narr = array.filter((item) => {
        return item["Stage"] === "Final";
    })

    return narr;
};

console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array) {
    let years = array.map((item) => {
        return item["Year"];
    })

    return years;

};

console.log(getYears(fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
let winners = [];
    let placeHolder = cb.filter((item) => {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            winners.push(item["Away Team Name"]);
        }
    })

    return winners;
};

console.log(getWinners(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getFullWinners(cb) {
let winners = [];
    let placeHolder = cb.filter((item) => {
         if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item);
        } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            winners.push(item);
        }
    })
    
    return winners;
};

// console.log(getFullWinners(getFinals(fifaData)));


function getWinnersByYear(cb) {
let fullWinners = [];
    let placeHolder = cb.filter((item) => {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            fullWinners.push(`In ${item["Year"]}, ${item["Home Team Name"]} won the world cup!`);
        } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            fullWinners.push(`In ${item["Year"]}, ${item["Away Team Name"]} won the world cup!`);
        }
    });

    return fullWinners;
};

console.log(getWinnersByYear(getFullWinners(getFinals(fifaData))));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {
    const states = array.length;

    let reduced = array.reduce((total, currentValue) => {
        return total += currentValue["Home Team Goals"], total += currentValue["Away Team Goals"];
    }, 0);

    return reduced/states;
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
