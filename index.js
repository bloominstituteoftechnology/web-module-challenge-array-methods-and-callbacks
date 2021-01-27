import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final (*/

const newArray = fifaData.filter((item)=> {
    return item.Year === 2014 && item.Stage === 'Final';
    });
const homeTeamName = newArray.map((item)=>{
return item['Home Team Name'];
    });
const awayTeamName = newArray.map((item)=>{
    return item['Away Team Name'];
    });
const homeTeamGoals = newArray.map((item)=>{
    return item['Home Team Goals'];
    });
const awayTeamGoals = newArray.map((item)=>{
    return item['Away Team Goals'];
    });
console.log(homeTeamName);
console.log(awayTeamName);
console.log(homeTeamGoals);
console.log(awayTeamGoals);




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    return data.filter((item)=>{
      return item.Stage === 'Final';
    })
 }
 
 console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, finals) {
    return finals(array).map((item)=> {
      return item.Year;
    });
  }
  
  console.log(getYears(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, finals) {
    const list = finals(array);
    const winners =  [];
    
    // Get home team victories
    const homeTeamWins = list.filter((score) =>{
        return score['Home Team Goals'] > score['Away Team Goals'];
        });//List by countries
    const homeWinsList = homeTeamWins.map((item)=> item["Home Team Name"]);
    console.log(homeWinsList);
    
    //Get away team victories
    const awayTeamWins = list.filter((score) =>{
        return score['Away Team Goals'] > score['Home Team Goals'];
      }); //List by countries
    const awayWinsList = awayTeamWins.map((item)=> item["Away Team Name"]);
    console.log(awayWinsList);
  
    winners.push(...homeWinsList, ...awayWinsList);
    return winners;
}
  
  console.log(getWinners(fifaData, getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getYearsCb, getWinnersCb) {
    const getString = [];
    getString.push(`In ${getYearsCb(array, getFinals)}, ${getWinnersCb(array, getFinals)} won the world cup`);
}
  
  console.log(getWinnersByYear(fifaData, getYears, getWinners));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(finals) {
    const list = finals;
    var avgHome = [];
    var avgAway = [];
    //Create array of filtered objects with finals data
    const homeTeamGoals = list.filter((game) => game['Home Team Goals']);
      console.log(homeTeamGoals);
      //Create array of final scores for Home Team
    const homeWinsList = homeTeamGoals.map((item)=> item["Home Team Goals"]);
    console.log(homeWinsList);
    //Create array of filtered objects with finals data
    const awayTeamGoals = list.filter((game) => game['Away Team Goals']);
      console.log(homeTeamGoals);
      //Create array of final scores for Away Team
    const awayWinsList = awayTeamGoals.map((item)=> item["Away Team Goals"]);
    console.log(awayWinsList);
    
    avgHome = homeWinsList.reduce((getSum, finals) =>{
      return (getSum + finals);
    },0) / finals.length;
    console.log(avgHome);
    
    avgAway = awayWinsList.reduce((getSum, finals) =>{
      return (getSum + finals);
    },0) / finals.length;
    console.log(avgAway);
    return avgHome, avgAway;
  }
  console.log(getAverageGoals(getFinals(fifaData)));




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
