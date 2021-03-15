import { fifaData } from './fifa.js';
// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

console.log('Task 1 a: ', finals2014[0]['Home Team Name']);
//(a) Home Team name for 2014 world cup final

console.log('Task 1 b: ', finals2014[0]['Away Team Name']);
//(b) Away Team name for 2014 world cup final

console.log('Task 1 c: ', finals2014[0]['Home Team Goals']);
//(c) Home Team goals for 2014 world cup final

console.log('Task 1 d: ', finals2014[0]['Away Team Goals']);
//(d) Away Team goals for 2014 world cup final

console.log('Task 1 e: ', finals2014[0]['Win conditions']);
//(e) Winner of 2014 world cup final */


@@ -24,8 +24,10 @@ Use getFinals to do the following:
hint - you should be looking at the stage key inside of the objects
*/

function getFinals(/* code here */) {
   /* code here */
function getFinals(item){

    const get_finals = fifaData.filter(item=>item.Stage=='Final')
    return get_finals;
}


@@ -36,8 +38,8 @@ Use the higher-order function called getYears to do the following:
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(/* code here */) {
    /* code here */
function getYears(fifaData) {
    return getFinals(fifaData).map(item => item.Year);
}


@@ -49,8 +51,12 @@ Use the higher-order function getWinners to do the following:
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {
    /* code here */
function getWinners(fifaData) {
    let winners = getFinals(fifaData);
    winners = winners.map(function(item){
        return item["Home Team Goals"] > item["Away Team Goals"]? item["Home Team Name"]: item["Away Team Name"]
    })
    return winners;
}


@@ -65,8 +71,14 @@ Use the higher-order function getWinnersByYear to do the following:
hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(/* code here */) {
    /* code here */
function getWinnersByYear(fifaData, getYears, getWinners) {
    let year = getYears(fifaData);
    let winners = getWinners(fifaData);
    let newArray=[];
    for(let i=0;i< winners.length; i++){
        newArray.push(`In ${year[i]}, ${winners[i]} won the world cup!` )
    }
    return newArray;
}


@@ -81,9 +93,14 @@ Use the higher order function getAverageGoals to do the following:
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}
function getAverageGoals(arrayCallBack) {
    let totalNumber = arrayCallBack.reduce(function(accumulator, item){
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"];
    },0)

    return (totalNumber/ arrayCallBack.length).toFixed(2);

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
