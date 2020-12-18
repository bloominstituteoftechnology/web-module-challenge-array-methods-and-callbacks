import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const data2014 = fifaData.filter(function(sparklePony){   // this const is a copy of the OG, and you can work out of that "branch"
    return (sparklePony["Year"] === 2014 && sparklePony["Stage"] === "Final")       // using .filter lets you pull data to work with, 
});

//(a) Home Team name for 2014 world cup final
// console.log(fifaData(["Home Team Name"]); // compare to the one below

console.log(data2014[0]["Home Team Name"]); // structure goes like log(array[indexVal][keyVal]); remember the jar analogy, what are you reaching for

//(b) Away Team name for 2014 world cup final
console.log(data2014[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log(data2014[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log(data2014[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
console.log(data2014[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter 
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects -  .stage
*/

function getFinals(dataParam) { // dataParam is the arg
    const getSquads = dataParam.filter(function(jar){
        return jar.Stage === "Final"; // .notation or ["bracket"] notation , also check for cap errors
    });
    return getSquads;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array   // []
2. Receive a callback function getFinals from task 2     // getFinalsCB
3. Return an array called years containing all of the years in the getFinals data set*/       

function getYears(arrParam, getFinalsCB){
    const years = arrParam.map(getFinalsCB(index){
        return index[Year];  // make sure to copy the exact notation of the items inside the array: Year vs year
    });
        return years;
}
getYears(getFinals);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr, getFinalsCB) { // recieve an arr and getFinals
    const finals = getFinalsCB(arr);  // callback of getFinals
    const winners = finals.map(function(param){
        if(param["Home Team Goals"] > param["Away Team Goals"]){  // if/else of winner (home or away) of each `finals` game.
            return (param["Home Team Goals"]);
        }else{
            return (param["Away Team Goals"]);
        }
    });
    return(winners);  //  names of all winning countries in an array called `winners`
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arrArray, getYearsCB, getWinnersCB) {
    let newArr = [];
    let years = getYearsCB(arrArray, getFinals);
    let winners = getWinnersCB(arrArray, getFinals);
    for(let i =0; i< years.length;i++){
      newArr.push(`In ${years[i]}, ${winners[i]} won the world cup!`);  
    }
    return newArr;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
CB func of getFinals as an arg
return avg # of TOTAL HOME TEAM GOALS and AWAY TEAM GOALS per MATCH and round the valuo

 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
function getAverageGoals(getFinalsCB){
    let avgGoals = getFinalsCB.reduce((count, obj) => count +(obj["Home Team Goals"] + obj["Away Team Goals"]),0)/getFinalsCB.length;
    return avgGoals.toFixed(2);
}


// function getAverageGoals(getFinalsCB, item) {
//     let avgHomeGoals = thing.reduce(getFinalsCB(accumulator, item){
//         return accumulator + item["Home Team Goals"];
//     },0)/item.length;
//     let avgAwayGoals = thing.reduce(getFinalsCB(accumulator, item){
//         return accumulator + item["Away Team Goals"];    
//     },0)/item.length;
//     const totalGoals = avgHomeGoals + avgAwayGoals
//     return totalGoals.toFixed(2); // need to understand the toFixed Method, why 2? for specificity of decimals
// } 

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
