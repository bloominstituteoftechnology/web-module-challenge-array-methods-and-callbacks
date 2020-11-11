import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //
//test

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const final2014 = fifaData.filter((match) => {
   return match.year === 2014 && match.stage === "Final" // conditional
})
/*homeTeam2014 = [
    {
    "Year": 2014, //randomword
    "Datetime": "13 Jul 2014 - 16:00",
    "Stage": "Final",
    "Stadium": "Estadio do Maracana",
    "City": "Rio De Janeiro",
    "Home Team Name": "Germany",
    "Home Team Goals": 1,
    "Away Team Goals": 0,
    "Away Team Name": "Argentina",
    "Win conditions": "Germany win after extra time",
    "Attendance": 74738,
    "Half-time Home Goals": 0,
    "Half-time Away Goals": 0,
    "Referee": "Nicola RIZZOLI (ITA)",
    "Assistant 1": "Renato FAVERANI (ITA)",
    "Assistant 2": "Andrea STEFANI (ITA)",
    "RoundID": 255959,
    "MatchID": 300186501,
    "Home Team Initials": "GER",
    "Away Team Initials": "ARG"
    }
] */
console.log(final2014[0]['Home Team Data']);



//(b) Away Team name for 2014 world cup final
// const awayTeam2015 = fifaData.filter(match2 => {
//     return //to locate data in object = conditional
//     [awayTeam2015[0]["Away Team Name"] [//access the object and pull out value associated with the away team key
// })
console.log(final2014[0]["Away Team Data"]);
//(c) Home Team goals for 2014 world cup final
console.log(final2014[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(final2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
console.log(final2014[0]["Home Team Name"]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const func = getFinals(data) = {
    fifaData.filter((match) => {
        return match.year === 2014 && match.stage === "Final"
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {
    /* code here */
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {
    /* code here */
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {
    /* code here */
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
   /* code here */
}






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}