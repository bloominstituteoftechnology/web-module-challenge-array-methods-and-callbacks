import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
let homeTeam = fifaData.filter(function (item) {
  return item.Stage === 'Final' && item.Year === 2014;
});

//(b) Away Team name for 2014 world cup final
let awayName = fifaData.filter(function (item) {
  return item.Stage === 'Final' && item.Year === 2014;
});

//(c) Home Team goals for 2014 world cup final
let homeGoals = fifaData.filter(function (item) {
  return item.Stage === 'Final' && item.Year === 2014;
});

//(d) Away Team goals for 2014 world cup final
let awayGoals = fifaData.filter(function (item) {
  return item.Stage === 'Final' && item.Year === 2014;
});

//(e) Winner of 2014 world cup final */
let winTeam = fifaData.filter(function (item) {
  return item.Stage === 'Final' && item.Year === 2014;
});

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
  let finalTeams = data.filter(function (item) {
    return item.Stage === 'Final';
  });

  return finalTeams;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to` do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(anArray, cb) {
  let finalTeams = cb(anArray)
  let years = finalTeams.map(function (item) {
    return item.Year;
  });

  return years;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:
1. Receives an array
2. Receives the callback function getFinals from task 2
3. Determines the winner (home or away) of each `finals` game.
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(anArray, cb) {
  let winners = [];
  let finalTeams = cb(anArray);

  for (let i in finalTeams) {
    if (finalTeams[i]['Home Team Goals'] > finalTeams[i]['Away Team Goals']) {
      winners.push(finalTeams[i]['Home Team Name']);
    } else if (finalTeams[i]['Home Team Goals'] < finalTeams[i]['Away Team Goals']) {
      winners.push(finalTeams[i]['Away Team Name']);
    }
  }

  return winners;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!"

hint: the strings returned need to exactly match the string in step 4.
*/


function getWinnersByYear(anArray, cb1, cb2) {
  let year = cb1(anArray, getFinals);
  let country = cb2(anArray, getFinals);
  let winners = [];
  for (let i in year) {
    winners.push(`In ${year[i]}, ${country[i]} won the world cup!`);}

    return winners;
  }

  /* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  Use the higher order function getAverageGoals to do the following:
  1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
  2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place.

  (Hint: use .reduce and do this in 2 steps)

  Example of invocation: getAverageGoals(getFinals(fifaData));
  */

  function getAverageGoals(cb) {
   let homeAverage = cb.reduce(function (acc, item) {
       return acc + item['Home Team Goals'];
     }, 0);
   let awayAverage = cb.reduce(function (acc, item) {
       return acc + item['Away Team Goals'];
     }, 0);

   return ((homeAverage / cb.length) + (awayAverage / cb.length)).toFixed(2)
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
