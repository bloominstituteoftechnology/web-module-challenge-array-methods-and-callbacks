import { fifaData } from './fifa.js';
console.log(fifaData);
// console.log(fifaData);

console.log('its working');
// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
@@ -11,35 +11,73 @@ console.log('its working');
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


//Home Team Name - 2014 Finals
const home = fifaData.filter((e) => {
    if (e['Year'] === 2014 && e['Stage'] === 'Final') {
     return e["Home Team Name"]
    }
    });
// console.log(home)
//Away Team Name - 2014 Finals
const away = fifaData.filter((e) => {
    if (e['Year'] === 2014 && e['Stage'] === 'Final') {
     return e["Away Team Name"]
    }
    });
// console.log(away)
//Home Team Goals - 2014 Finals
const homeGoals = fifaData.filter((e) => {
    if (e['Year'] === 2014 && e['Stage'] === 'Final') {
     return e["Home Team Goals"]
    }
    });
// console.log(homeGoals)
//Away Team Goals - 2014 Finals
const awayGoals = fifaData.filter((e) => {
    if (e['Year'] === 2014 && e['Stage'] === 'Final') {
     return e["Away Team Goals"]
    }
    });
    // console.log(awayGoals)
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(/* code here */) {

    /* code here */
function getFinals(data) {

let finalsOnly = data.filter((e) => e['Stage'] == 'Final')
return finalsOnly
};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {
// console.log(getFinals(fifaData))

    /* code here */
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

};
function getYears(cb) {
    const years = cb.map(years => years.Year);
    return years
}

getYears();
// console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();
    function getWinners(cb) {

        const winners = cb.map(function(item){
            if (item['Home Team Goals'] > item['Away Team Goals']){
                return(item['Home Team Name']);
            }
            else if (item['Home Team Goals'] < item['Away Team Goals']){
                return(item['Away Team Name']);
            }
            else{
               return('Tie');
            }
        });
        return(winners);
    };
console.log(getWinners(getFinals(fifaData)))
// console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
@@ -48,21 +86,27 @@ Parameters:
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

function getWinnersByYear(cb1,cb2) {
    const newArr = cb1.map(function(item,index){
        return `In ${item} ${cb2[index]} won the world cup!` ;
    });
    return newArr;
};
console.log(getWinnersByYear(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData))));

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
function getAverageGoals(data) {

    /* code here */
    const totalGoals = data.reduce(function(acc,item){
        return acc + item['Home Team Goals'];
    },0);
    return totalGoals / data.length;
    };

};

getAverageGoals();
console.log(getAverageGoals(fifaData));




/// 🥅 STRETCH 🥅 ///

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
