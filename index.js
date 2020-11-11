import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// //(a) Home Team name for 2014 world cup final
//     const cupFinalHomeName = fifaData.filter(function(item){
//         return item.Year === 2014 && item.Stage === "Final";
//     });
//     console.log("finals2014 array", cupFinalHomeName);
// //(b) Away Team name for 2014 world cup final
//     console.log("Task 1b:", cupFinalHomeName[0]["Home Team Name"]);
// //(c) Home Team goals for 2014 world cup final
//     console.log("Task 1c:",cupFinalHomeName[0]["Home Team Goals"]);
// //(d) Away Team goals for 2014 world cup final
//     console.log("Task 1d:", cupFinalHomeName[0]["Away Team Goals"]);
// //(e) Winner of 2014 world cup final */
//     console.log("Task 1e:", cupFinalHomeName[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
// const getFinals = fifaData.filter(item => item.Stage === "final");
function getFinals(data){
    const finalsData = data.filter(function(item){
        return item.Stage === "Final"; 
    });
    return finalsData;
}
getFinals(fifaData);
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// const years = fifaData.map(item => item["Year"]);

function getYears(callBack){
     const years = callBack.map(function(callBack){
      return callBack.Year
    });
    return years;
}
getYears(fifaData);
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
function getWinners(callBack) {
   const winner = [];
   callBack.map(function(callBack){
       if(callBack.Stage === "Final"){
       winner.push(callBack["Home Team Name"])
       winner.push(callBack["Away Team Name"])
       }
   });
   return winner;
}
getWinners(fifaData);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// you need to use an advanced array method that gives you access to the index position. 
// Then you can use an advaned array method to loop through 
// one of the arrays and use the index position to pull from the other
function getWinnersByYear(data, getWinnersCB, getYearsCB){
    const winnersByYear = [];
    const winner = getWinnersCB(data);
    const years = getYearsCB(data);
    winner.forEach(function(item,index){
        winnersByYear.push(`In ${winner[index]}, ${years[index]} won the world cup!`);
    });
return winnersByYear;
}
getWinnersByYear(fifaData, getWinners, getYears);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
// const avg = (goalTotal, matches) => goalTotal / matches;
function getAverageGoals(data) {
    let totalMatches = 0;
    let totalGoals = 
    data.reduce(function(accumulator, match){
        totalMatches = totalMatches + 1;
      return accumulator + match["Home Team Goals"] + match["Away Team Goals"];
    },0);
    return(totalGoals / totalMatches).toFixed(2); 
 }
 getAverageGoals(fifaData);

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