import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');



// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
// (b) Away Team name for 2014 world cup final
// (c) Home Team goals for 2014 world cup final
// (d) Away Team goals for 2014 world cup final
// (e) Winner of 2014 world cup final 


const teamName = fifaData.filter(function (item) {
    return item.Year === 2014 && item.Stage === 'Final';
});


console.log(teamName[0]["Home Team Name"]);
console.log(teamName[0]["Away Team Name"]);
console.log(teamName[0]["Home Team Goals"]);
console.log(teamName[0]["Away Team Goals"]);
console.log(teamName[0]["Winner of World Cup 2014"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an teamName of objects 
with only finals data */




function getFinals(data) {
    const array = data.filter(function (item) {
        
        return item.Stage === 'Final'
    });

    return teamName;
}

console.log(getFinals(fifaData));






/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an teamName called `years` 
containing all of the years in the dataset */







/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an 
teamName called `winners` */ 









// Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings
// "In {year}, {country} won the world cup!" 

// Parameters: 
// callback function getWinners
// callback function getYears








/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();