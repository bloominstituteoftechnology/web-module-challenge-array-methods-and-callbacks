import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');



// fifaData.forEach(e => 
// {
//     if(e["Home Team Name"] !== '') 
//     console.log(e["Home Team Name"])
// })

// function getInfo(array, key){ array.forEach(e =>
//     {
//         if(e[key] !== '')
//         console.log(e[key])
//     })}

//    let getInfo = (array, key) =>
//     array.forEach(e =>
//         {
//             if(e[key] !== '')
//             console.log(e[key])
//         })



// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let getInfo = (array, key) =>//function made for getting information from a specific key within every object within the array
array.forEach(e =>
    {
        if(e[key] !== '')
        console.log(e[key])
    })
// /*A*/
// getInfo(fifaData, "Home Team Name")
// //B
// getInfo(fifaData, "Away Team Name")
// //C
// getInfo(fifaData, "Home Team Goals")
// //D
// getInfo(fifaData, "Away Team Goals")
//E



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(array, key) {
    let finalList = []
    array.forEach(e =>
        {
            if(e[key] === "Final")
            finalList.push(e)
        })
        return finalList
};
let finalList = [] = getFinals(fifaData, "Stage")
console.log(finalList)

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb, key) {
    let years = []//creating the array to store the years in
    cb.forEach(e =>//creats a forEach loop for the cb, creates the variable e(element) 
        {
            if(e[key] !== '')//if the elements key is not equal to an empty string 
            years.push(e[key])//push the object to the created variable 
        })
    return years//returns the created array
};

let years = getYears(finalList, "Year")//storing the function in a variable to call back to later
console.log (years)//just logging to make sure it worked

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
/*"Home Team Name": "Germany",
"Home Team Goals": 1,
"Away Team Goals": 0,
"Away Team Name": "Argentina",*/

function getWinners(cb, goalsH, goalsA, teamH, teamA) {
    let winners = []
    cb.forEach(e =>
        {
            if(e[goalsH] > e[goalsA])
            winners.push(e[teamH])
            else
            winners.push(e[teamA])
        })
        console.log(winners)
};

let winners = getWinners(finalList, "Home Team Goals", "Away Team Goals", "Home Team Name", "Away Team Name")

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    let years = cbYears;
    let winners = cbWinners;
    years.forEach(e =>
        {
            console.log(years)
        })
};

getWinnersByYear(winners, years);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

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
