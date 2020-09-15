import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

// sample obj keys
// Assistant 1: "MACHIN Roger (FRA)"
// Assistant 2: "DE LEO Diego (MEX)"
// Attendance: 50560
// Away Team Goals: 0
// Away Team Initials: "ROU"
// Away Team Name: "Romania"
// City: "Guadalajara"
// Datetime: "02 Jun 1970 - 16:00"
// Half-time Away Goals: 0
// Half-time Home Goals: 0
// Home Team Goals: 1
// Home Team Initials: "ENG"
// Home Team Name: "England"
// MatchID: 1812
// Referee: "LORAUX Vital (BEL)"
// RoundID: 250
// Stadium: "Jalisco"
// Stage: "Group 3"
// Win conditions: ""
// Year: 1970


// // ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(fifaData[828]);
console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);


/* Task 2: Create a function called getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(el => el.Stage === "Final");
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let years = cb(fifaData).map(el => el.Year);
    return years;
};

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    return cb(fifaData).map(el => {
        if (el["Home Team Goals"] > el["Away Team Goals"]) {
            return el["Home Team Name"];
        }
        else return el["Away Team Name"];
    })

};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    let years = getYears(getFinals);
    let winners = getWinners(getFinals)
    for (let i = 0; i < years.length; i++) {
        console.log(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
};

getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {
//     let init = 0;
//     return data.reduce(function (accumulator, currentGoals) {
//         let both = currentGoals["Home Team Goals"] + currentGoals["Away Team Goals"]
//         return accumulator + both / data.length;
//     }, init);
// };

function getAverageGoals(data) {
    let init = 0;
    let homeAvg = data.reduce(function (acc, currentGoals) {
        return acc + currentGoals["Home Team Goals"] / data.length;
    }, init) ;
    let awayAvg = data.reduce(function (acc, currentGoals) {
        return acc + currentGoals["Away Team Goals"] / data.length;
    }, init);
    return `Home Average: ${homeAvg} 
Away Average: ${awayAvg}`
}


console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

//get final matches as whole objects (getFinals(data))
//use reduce to add ITA wins
// reduce takes sum (accumulator) and currentValue -- currentValue will be an object; sum will be number
// if currentValue["home/away team initials] === ITA
    // log if ITA is home or away
    // if ITA goals > other goals
    // return sum ++
function getCountryWins(data, initials) {
    return getFinals(data).reduce(function (wins, currMatch) {
        let homeOrAway = "";
        let otherTeam = "";
        let country = "";
        if (currMatch["Home Team Initials"] === initials) {
            homeOrAway = "Home Team Goals";
            otherTeam = "Away Team Goals";
            country = currMatch["Home Team Name"];
            if (currMatch[homeOrAway] > currMatch[otherTeam]) {
                wins++;
            }
            else if (currMatch["Win conditions"].includes(`${country} win`)) {
                wins++;
            }
        }
        else if (currMatch["Away Team Initials"] === initials) {
            homeOrAway = "Away Team Goals";
            otherTeam = "Home Team Goals";
            country = currMatch["Away Team Name"];
            if (currMatch[homeOrAway] > currMatch[otherTeam]) {
                wins++;
            }
            else if (currMatch["Win conditions"].includes(`${country} win`)) {
                wins++;
            }
        }
        return wins;
    }, 0)

};

console.log(getCountryWins(fifaData, "BRA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// get finals objects set
// get average goals per team in finals
    //have to link teams with goals scored
    //use reduce to create new array with team, + total goals scored / matches played
// compare average goals and return greatest

function getGoals(data) {
    let avgGoals = [];
    avgGoals = getFinals(data).reduce(function (acc, obj) {
        let home = obj["Home Team Name"]; //home/away === country name
        let away = obj["Away Team Name"];
        if (!acc[home]) { //if obj.country doesn't exist, create obj.country and set as array to hold obj with # of goals = current match & matches played = 1; (keys cannot be objects -- will convert to string)
            acc[home] = [];
            acc[home].push({goals: obj["Home Team Goals"], matches: 1, avg: obj["Home Team Goals"]/1});
        }
        if (acc[home]) { //if obj.country exists, add current matches goals to previous tally and increase number of matches played by 1
            acc[home][0].goals += obj["Home Team Goals"];
            acc[home][0].matches++;
            acc[home][0].avg = acc[home][0].goals / acc[home][0].matches;
        }

        if (!acc[away]) { //same as above but for away teams
            acc[away] = [];
            acc[away].push({goals: obj["Away Team Goals"], matches: 1, avg: obj["Away Team Goals"]/1});
        }
        else {
            acc[away][0].goals += obj["Home Team Goals"];
            acc[away][0].matches++;
            acc[home][0].avg = acc[away][0].goals / acc[away][0].matches;
        }
        
        return acc;// at the end we should have an obj with countries: [{goals: #, matches: #avg: #}]
    }, {})
    let mostGoals = 0;
    let greatestTeam = ""; //now for loop through to find the greatest average 
    for (let i in avgGoals) {
        if (avgGoals[i][0].avg > mostGoals) {
            greatestTeam = i;
            mostGoals = avgGoals[i][0].avg;
            console.log(`${i}: ${avgGoals[i][0].avg}`)
        }
    }
    return greatestTeam;
};

console.log(getGoals(fifaData));


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
