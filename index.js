import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const homeTeam = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Home Team Name"];
console.log(homeTeam);

//(b) Away Team name for 2014 world cup final

const awayTeam = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Away Team Name"];
console.log(awayTeam);

//(c) Home Team goals for 2014 world cup final

const homeTeamGoals = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Home Team Goals"];
console.log(homeTeamGoals);

//(d) Away Team goals for 2014 world cup final

const awayTeamGoals = fifaData.filter(game => (game.Year === 2014 && game.Stage === 'Final'))[0]["Away Team Goals"];
console.log(awayTeamGoals);

//(e) Winner of 2014 world cup final */

const winner2014 = () => homeTeamGoals > awayTeamGoals ? homeTeam : awayTeam;
console.log(winner2014());

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    return data.filter(game => game.Stage === 'Final');
  }
  



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(finals) {
    let years = finals.map(function (ab){
        return ab.Year;
    });
    return years;

}

console.log(getYears(getFinals(fifaData)));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callback) {
    return callback(array).map(final => {
        return final["Home Team Goals"] > final["Away Team Goals"] ?
               final["Home Team Name"] : final["Away Team Name"]
      });
    }


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callbackYears, callbackWinners) {
    const finalsYears = callbackYears(array);
    const winnersByYear = callbackWinners(array);
    return finalsYears.map((finalYear, index) => { 
      return `In ${finalYear}, ${winnersByYear[index]} won the world cup!`
    })
  }


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(finals) {
    let goalsPerMatch = finals.map(function(ab){
      let homeGoals = ab['Home Team Goals'];
      let awayGoals = ab['Away Team Goals'];
      return homeGoals + awayGoals;
    });

    let totalGoals = goalsPerMatch.reduce((total, goals) => total + goals);
    return (totalGoals / goalsPerMatch.length).toFixed(2);
 }
 console.log(getAverageGoals(getFinals(fifaData)));




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryGames(data, initials) {
    return data.filter((country) => {
      return country["Home Team Initials"] === initials ||
      country["Away Team Initials"] === initials
    });
  }
  
  function getCountryWins(data, initials, games) {
    const countryGames = games(data, initials);
    return countryGames.reduce((wins, game) => {
      if (game["Home Team Initials"] === initials && 
          game["Home Team Goals"] > game["Away Team Goals"]) {
        wins++;
      } else if (game["Away Team Initials"] === initials && 
                 game["Away Team Goals"] > game["Home Team Goals"]) {
        wins++
      }
      return wins;
    }, 0);
  }

  console.log(getCountryWins(fifaData, "CHN", getCountryGames)) // Should return 0


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
