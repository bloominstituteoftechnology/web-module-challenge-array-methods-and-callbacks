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

let wc14 = fifaData.find(match => {
    return match.Stage == "Final" && match.Year == 2014});

console.log(wc14["Home Team Name"]);

console.log(wc14["Away Team Name"]);

console.log(wc14["Home Team Goals"]);

console.log(wc14["Away Team Goals"]);

if (wc14["Home Team Goals"] > wc14["Away Team Goals"]) {
    console.log(wc14["Home Team Name"],"is the winner of the 2014 world cup final!!");

}else {
    console.log(wc14["Away Team Name"],"is the winner of the 2014 world cup final!!");

}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(football) {
    let champGame = football.filter(function (item) {
        return item.Stage === "Final";
    });
    return champGame;
}

console.log(getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears( cb ) {
    const finalsCb = cb;
    const finalsYear = finalsCb.map(function (item) {
        return item.Year;
    });
        return finalsYear;
    
};

console.log(getYears(getFinals(fifaData)));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners( cb ) {

    const finalsCb = cb;

    const winners = finalsCb.map(function (item) {

        let homeTeam = item["Home Team Goals"];
        let awayTeam = item["Away Team Goals"];
        let moreGoals = Math.max(homeTeam, awayTeam);

        if (homeTeam === awayTeam) {
            return(item["Win Condition"]);

        }else if (homeTeam === moreGoals) {
           return item["Home Team Name"];

        }else {
           return item["Away Team Name"];
        }});

    return winners; 

};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2 ) {
    const fifaWinner = cb1;
    const fifaYear = cb2;
    const whoWon = [];

    //loop to include wins by penalties from the Win Condition
    for (let i = 0; i < fifaYear.length; i++){
        if (fifaYear[i] >= ("penalties")) {
            whoWon.push(`In ${fifaYear[i]}, ${fifaWinner[i]} won by penalties!`);
        }else {
            whoWon.push(`In ${fifaYear[i]}, ${fifaWinner[i]} won the world cup!`);
        }
    }

        return whoWon;
        
};

//logging 2 callback functions from task 3 and 4
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// reference from guided project
//// let cb2 = ( total , currentValue ) => { return total + currentValue.land_area; }
//// console.log( cityData.reduce(  cb2, 0 ));



function getAverageGoals( cb ) {
    
    let total = cb.reduce((HowManyGoals, game) => {
        HowManyGoals.goalsAway += game["Away Team Goals"];

        HowManyGoals.goalsHome += game["Home Team Goals"];
            return HowManyGoals;

    }, {goalsAway: 0, goalsHome: 0});

    let averageAway = total.goalsAway / cb.length;

    let averageHome = total.goalsHome / cb.length;

            return {averageAway, averageHome};
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

// If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file.
