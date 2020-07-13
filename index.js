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

const fifaFinal = fifaData.filter ( (element) => {return element.Year === 2014 && element.Stage === "Final"});

console.log(fifaFinal);
console.log(fifaFinal[0]["Home Team Name"]);
console.log(fifaFinal[0]["Home Team Goals"]);
console.log(fifaFinal[0]["Away Team Name"]);
console.log(fifaFinal[0]["Away Team Goals"]);
console.log(fifaFinal[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

   const finalD = data.filter ((element) =>  {return element.Stage === "Final"});
    return finalD;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callBack) {

    const yearsFin = callBack.map (item => item.Year)
    return yearsFin;
};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {

    const winners = callBack.map ( element => {
        if (element["Home Team Goals"] > element["Away Team Goals"]){
            return element["Home Team Name"]
        } else if  (element["Home Team Goals"] === element["Away Team Goals"]){
            return element["Win conditions"]
        } else { 
           return element["Away Team Name"]
        }
    });
return winners;

};

console.log(getWinners(getFinals(fifaData)));




/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */



function getWinnersByYear(callWin, callYears) {

    const winnerName = callWin.map( (country, index) => {
        return `In ${callYears[index]}, ${country} won the world cup`})
    return winnerName;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)))); 




/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let goalsAverageHome = data.reduce((total, element) => {
        
        return total + element["Home Team Goals"];
    },0);
    console.log(goalsAverageHome);
    goalsAverageHome = goalsAverageHome / data.length;

    let goalsAverageAway = data.reduce((total, element) => {
        return total + element["Away Team Goals"];
    },0);
    console.log(goalsAverageAway);
    goalsAverageAway = goalsAverageAway / data.length;
    return{goalsAverageHome, goalsAverageAway};


}
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
