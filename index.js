import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

fifaData.forEach((item) => {
    if(item.Year === 2014 && item.Stage === 'Final'){
        console.log(item["Home Team Name"]);
        console.log(item["Away Team Name"]);
        console.log(item["Home Team Goals"]);
        console.log(item["Away Team Goals"]);
        if(item["Home Team Goals"] > item["Away Team Goals"] ){
            console.log(`${item["Home Team Name"]} was the winner of the 2014 world cup final.`)
        }else{
            console.log(`${item[" Team Name"]} was the winner of the 2014 world cup final.`)
    
        }
    }
})

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
    let finalsInfo = [];
    data.forEach((item) => {
        if(item.Stage === 'Final'){
            finalsInfo.push(item);
        }
    })
    return finalsInfo;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let data = callback(fifaData);
    let years = [];
    data.forEach((item) => {
        years.push(item.Year);
    })
    return years;
};

console.log(getYears(getFinals))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let data = callback(fifaData);
    let winningTeams = [];
    data.forEach((item) => {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winningTeams.push(item["Home Team Name"]);
        }else{
            winningTeams.push(item["Away Team Name"]);
        }
    })
    return winningTeams;
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb,cb2) {
    let winners = cb(getFinals);
    let years = cb2(getFinals);

    const winnerStatement = winners.forEach((item,index) => {
        const item2 = years[index];
        console.log(`In ${item2}, ${item} won the world cup!`);
    })

    return winnerStatement;
};
getWinnersByYear(getWinners,getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeScores = [];
    let awayScores = [];
    data.forEach((item) => {
        homeScores.push(item["Home Team Goals"]);
        awayScores.push(item["Away Team Goals"]);
    })

    let totalHome = homeScores.reduce((totalScore,score)=>{
        return totalScore + score;
    },0);
    let avgHome = totalHome / homeScores.length;
    let totalAway = awayScores.reduce((totalScore,score)=>{
        return totalScore + score;
    },0);
    let avgAway = totalAway / awayScores.length;

    return `The average home score is ${avgHome}, the average away score is ${avgAway}`
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

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
