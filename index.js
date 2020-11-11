import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final"
})

// console.log("finals2014 array:", finals2014);

//(a) Home Team name for 2014 world cup final
console.log("Task 1a:", finals2014[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final
console.log("Task 1b:", finals2014[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log("Task 1c:", finals2014[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log("Task 1d:", finals2014[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
console.log("Task 1e:", finals2014[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// const getFinals = fifaData.filter(function(item){
//     return item.Stage === "Final";  
//     }); 
//     console.log(getFinals);

// part1 - create func of getFinals: function getFinals(data)
// part2 - take data as an arg:
// part3 - return arr of obj with only finals data:

function getFinals(data){
    let finalSquads = data.filter(function(item){
        return item.Stage === "Final"

    });
    return finalSquads;
}
//getFinals(fifaData);

// console.log("Task2 Finals:",getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// HOF of getYears, CB function of "getFinals", return arr of 'years
// finalYears is an anon function

function getYears(){
    const years = fifaData.map(function(item){
        return item.Year;
    });
    return years
}   
getYears(getFinals);




// function getYears(){
//     const getFinals = fifaData.map(function(item){
//         return item.Year;
//     })
//     return getFinals
// }
// getYears();

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 


function getWinners(data,getFinals){
    const finals = getFinals(data)
    const winners = finals.map(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
        return (item["Home Team Name"])
        }else{
        return(item["Away Team Name"]) 
        }   
        });
    return (winners);
    }
//getWinners(data,getFinals);

//console.log(getWinners(data, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getYears, getWinners) {
    let winnerArr = []; 
    let winners = getWinners(getFinals(data,))
    let years = getYears(getFinals(data,))

    winners.forEach(function(item,index){
        winnerArr.push(`In ${years[index]}, ${item} won the world cup!`);
    });
    return winnerArr;    
}
// console.log(getWinnersByYear(getYears, getWinners);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data){
    const avgGoals = data.reduce(function(accumulator,item){
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"];
    },0);

} 




//     const avgGoals = fifaData.reduce(function(accumulator, data.index["Home Team Goals"], data.index["Away   Team Goals"]){
//         console.log(accumulator);
//         console.log(item);
//     return accumulator + data.index["Home Team Goals"] + data.index["Away Team Goals"];
//     },0);

// console.log(data["Home Team Goals"]);
// console.log(data["Away Team Goals"]);
// 




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