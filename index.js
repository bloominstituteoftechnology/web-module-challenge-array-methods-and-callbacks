import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const fourteenFinals = fifaData.filter(item => {
    return item.Year === 2014 && item.Stage === "Final";
});

//(a) Home Team name for 2014 world cup final

let homeTeam2014 = fourteenFinals[0]["Home Team Name"];

//(b) Away Team name for 2014 world cup final

let awayTeam2014 = fourteenFinals[0]["Away Team Name"];

//(c) Home Team goals for 2014 world cup final

let homeGoals2014 = fourteenFinals[0]["Home Team Goals"];

//(d) Away Team goals for 2014 world cup final

let awayGoals2014 = fourteenFinals[0]["Away Team Goals"];

//(e) Winner of 2014 world cup final */

let finalsWinner2014 = () => homeGoals2014 > awayGoals2014 ? homeTeam2014 : awayTeam2014;

console.log(finalsWinner2014());

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

const getFinals = array => array.filter(item => item.Stage === "Final");

console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// returns array of the years
//  const getYears = callback => {
//     let years = callback(fifaData).map(item => item.Year);
//     return years;
//  }

//  console.log(getYears(getFinals));

function getYears(array, callback) {
    const finalYears = callback(array);
    const years = finalYears.map(info => {
        return info.Year;
    });
    // console.log(typeof callback);
    return years; 
};


console.log(getYears(fifaData, getFinals));

 //instead of making the let newArray = [] thing - what we do here is say let years (new array we want) EQUAL a map of all the finals which we access using our CB func (that has already created an array for us of the finals)
        //this almost feels like a microscope of some sort - going in one level deeper



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, finalsCallback) {
    let winners = finalsCallback(array).map(final => {
        return final["Home Team Goals"] > final["Away Team Goals"] ?
            final["Home Team Name"] : final["Away Team Name"];
    });
    return winners;
};

// console.log(getWinners(getFinals));

// function getWinners(cbFinals) {
//     const thisThingForNow = cbFinals(fifaData);
//     let winners = thisThingForNow.map(final => {
//         if (final["Home Team Goals"] > final["Away Team Goals"]){
//             return final["Home Team Name"];
//         } else {
//             return final["Away Team Name"];
//         }
// });   return winners;
// };

// console.log(getWinners(getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callbackYears, callbackWinners) {
    const finalsYears = callbackYears(array, getFinals); // array of the years WC has been played = THIS NEEDS 2 ARGUMENTS BECAUSE THE CB FUNC WE ARE PASSING HAS 2 PARAMETERS
    const finalsWinners = callbackWinners(array, getFinals); // array of the winners
    let stringsWinner = finalsYears.map((year, index) => {
        return `In ${year}, ${finalsWinners[index]} won the world cup!`
    });
    return stringsWinner;
};

console.log(getWinnersByYear(fifaData, getYears, getWinners));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 

 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {
   let totalHomeGoals = getFinals.reduce((acc, current) => acc + current["Home Team Goals"], 0);
//    console.log(totalHomeGoals);
   let totalAwayGoals = getFinals.reduce((acc, current) => acc + current["Away Team Goals"], 0);
//    console.log(totalAwayGoals);
    let goals = totalHomeGoals + totalAwayGoals;
    // console.log(goals); // 68
    let games = getFinals.length; // 19
    // const average = goals / getFinals.length;
    // console.log(goals/games); ---this returns the right number but not rounded
    let avg = goals/games;
    let decimal = ((Math.round(avg * 100)) /  100).toFixed(2);
    console.log(typeof decimal);
}

getAverageGoals(getFinals(fifaData));

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
