import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldCupFinal = fifaData.filter(match => match.Year === 2014 && match.Stage === 'Final')[0];
console.log(worldCupFinal['Home Team Name']);
console.log(worldCupFinal['Away Team Name']);
console.log(worldCupFinal['Home Team Goals']);
console.log(worldCupFinal['Away Team Goals']);

function getWinningTeam(worldCupData){
    if(worldCupData['Home Team Goals'] > worldCupData['Away Team Goals']){
        return worldCupData['Home Team Name'];
    }
    else if(worldCupData['Away Team Goals'] > worldCupData['Home Team Goals']){
        return worldCupData['Away Team Name'];
    }
    else {
        return worldCupData['Win conditions'].split(" ")[0];
    }
}

function getWinningTeamInitials(worldCupData){
    if(worldCupData['Home Team Goals'] > worldCupData['Away Team Goals']){
        return worldCupData['Home Team Initials'];
    }
    else if(worldCupData['Away Team Goals'] > worldCupData['Home Team Goals']){
        return worldCupData['Away Team Initials'];
    }
    else {
        if(worldCupData['Win conditions'].split(" ")[0] == worldCupData['Home Team Name']){
            return worldCupData['Home Team Initials'];
        }
        else{
            return worldCupData['Away Team Initials'];
        }
    }
}

console.log(getWinningTeam(worldCupFinal));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(match => match.Stage === 'Final');
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(fifaData) {
    const years = getFinals(fifaData).map(match => match.Year);
    return years;
};

console.log(getYears(fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finals) {
    const myReturn = finals.map(getWinningTeam);
    return myReturn;
};

function getWinnersInitials(finals) {
    const myReturn = finals.map(getWinningTeamInitials);
    return myReturn;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 function mapWinnerAndYear(winner, year){
     return "In " + year + ", " + winner + " won the world cup!";
 }

function getWinnersByYear(winners, years) {
    returnArray = [];
    for(var i = 0; i < winners.length; i++){
        returnArray.push(mapWinnerAndYear(winners[i],years[i]));
    }
    return returnArray;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)),getYears(fifaData)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

console.log(getWinnersInitials(getFinals(fifaData)));

function getCountryWins(theData, initials) {
    var count = 0;
    for(var i = 0; i < theData.length; i++){
        if(theData[i] == initials){
            count++;
        }
    }
    return count;
};

console.log(getCountryWins(getWinnersInitials(getFinals(fifaData)),"BRA"));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
function getHomeGoals(item){
    return item["Home Team Goals"];
}

function getAwayGoals(item){
    return item["Away Team Goals"];
}

function addGoals(runningTotal, goals) {
    return runningTotal + goals;
}

function getAverageGoals(theData) {

    const homeGoals = theData.map(getHomeGoals);
    const homeTotal = homeGoals.reduce(addGoals, 0);
    const homeAvg = homeTotal / homeGoals.length;
    console.log(homeAvg);
 
    const awayGoals = theData.map(getAwayGoals);
    const awayTotal = awayGoals.reduce(addGoals, 0);
    const awayAvg = awayTotal / awayGoals.length;
    console.log(awayAvg);
};

getAverageGoals(fifaData);


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

