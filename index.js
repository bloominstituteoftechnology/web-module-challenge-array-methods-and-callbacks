const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
/*
const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage == 'Final';
})
*/

const finals2014 = fifaData.filter(item => item.Year === 2014 && item.Stage === 'Final');

console.log(finals2014);

//(a) Home Team name for 2014 world cup final

console.log(finals2014[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final

console.log(finals2014[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final

console.log(finals2014[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final

console.log(finals2014[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final */

console.log(finals2014[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
/*
function getFinals(data) {
    // code here 
    return data.filter(function(item){
          return item.Stage === 'Final';
    });
 }
 */
 /*
 function getFinals(data){
     return data.filter( item => item.Stage === 'Final');
 }
 */
 
 // const getFinals = (data => data.filter( item => item.Stage === 'Final'));
 
const getFinals = (data) => data.filter( item => item.Stage === 'Final');
 
console.log(getFinals(fifaData));
 

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

/*
function getYears(data, getFinals_cb) {
    // code here 
    const yearsArr = [];
    const finalsDate = getFinals_cb(data);
    for (let i = 0; i < finalsDate.length; i++) {
        yearsArr.push(finalsDate[i].Year);
    }      
    return yearsArr;   
}
*/

/*
function getYears(data, getFinals_cb) {
    const yearsArr = [];
    getFinals_cb(data).forEach(function(item){
        yearsArr.push(item.Year);        
    });
    return yearsArr;
}
*/

/*
function getYears(data, getFinals_cb) {
    const yearsArr = [];
    getFinals_cb(data).forEach(item => yearsArr.push(item.Year));        
    return yearsArr;
}
*/

const getYears = (data, getFinals_cb) => getFinals_cb(data).map(item => item.Year); 
      
console.log('task3:', getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

/*
function getWinners(data, getFinals_cb) {
    
    return getFinals_cb(data).map(item => item['Home Team Goals'] > item['Away Team Goals'] ? item['Home Team Name'] : item['Away Team Name']);      
}
*/

const getWinners = (data, getFinals_cb) => getFinals_cb(data).map(item => (item['Home Team Goals'] > item['Away Team Goals']) ? item['Home Team Name'] : item['Away Team Name']);

console.log(getWinners(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

/*
function getWinnersByYear(data, getYears_cb, getWinners_cb) {
    const yearsArr = getYears_cb(data, getFinals);
    const winnersArr = getWinners_cb(data, getFinals);

    return winnersArr.map((item, index) => `In ${yearsArr[index]}, ${item} won the world cup!`);
}
*/

const getWinnersByYear = (data, getYears_cb, getWinners_cb) => getWinners_cb(data, getFinals).map((item, index) => `In ${getYears_cb(data, getFinals)[index]}, ${item} won the world cup!`);

console.log('Task 5: ', getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
/*
function getAverageGoals(data) {
    const averageGoals = data.reduce((acc, item) => acc + item['Home Team Goals'] + item['Away Team Goals'], 0);
    return (averageGoals / data.length).toFixed(2);
}
*/

const getAverageGoals = (data => ((data.reduce((acc, item) => acc + item['Home Team Goals'] + item['Away Team Goals'], 0)) /data.length).toFixed(2));
 
console.log('Task 6: ', getAverageGoals(fifaData));



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
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
