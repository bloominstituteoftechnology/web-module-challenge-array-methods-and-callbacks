import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

fifaData.forEach (e => {if(e["Win Conditions"] !== "")
    console.log(e["Win Conditions"])
})
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function filterToObj(array, year) {
    let objIWantInArray = array.filter(e => e["Year"] === year); // filter for obj by year
    let objIWant = {};
    objIWant = objIWantInArray[0]; // convert array to obj
    return objIWant;
    }
    
var output = filterToObj(fifaData, 2014);
// console.log(output); Check to see if correct object. Is correct.
console.log("(a) " + output["Home Team Name"]);
console.log("(b) " + output["Away Team Name"]);
console.log("(c) " + output["Home Team Goals"]);
console.log("(d) " + output["Away Team Goals"]);
    
function winnerOfWorldCup(array, year) {
    let obj = filterToObj(array, year); // get target object in array by year.  Callback function.
    if (obj["Home Team Goals"] > obj["Away Team Goals"]) { // conditional to determine winner
    return `(e) ${obj["Home Team Name"]} is the winner of the ${year} World Cup!`;
    } else if (obj["Home Team Goals"] < obj["Away Team Goals"]) {
    return `(e) ${obj["Away Team Name"]} is the winner of the ${year} World Cup!`;
    } // end of conditional
}

// TEST CODE
var output = winnerOfWorldCup(fifaData, 2014);
console.log(output);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let newArray = data.map( element => {
        let newObj = {};  // declare newObj, assign target properties below
        newObj["Year"] = element["Year"];
        newObj["Home Team Name"] = element["Home Team Name"];
        newObj["Away Team Name"] = element["Away Team Name"];
        newObj["Home Team Goals"] = element["Home Team Goals"];
        newObj["Away Team Goals"] = element["Away Team Goals"];
        return newObj;
    }) // end of .map loop
    return newArray;
} // end of function

// TEST CODE
var output = getFinals(fifaData);
console.log(output);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, callback) {
    let finalsArray = getFinals(data); // getFinals returns smaller objects in an array
      
    let newArrayOfYears = finalsArray.map( element => { // creates an array of years in integers
      let year = 0;
      if (element["Year"] !== undefined) {
        year = element["Year"];
      }
      return year;
    }); // end of finalsArray.map loop
  
    return newArrayOfYears;
     
  } // end of function
  
  // TEST CODE
  var output = getYears(fifaData, getFinals);
  console.log(output);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, callback) {
    let finalsArray = getFinals(data); // returns an array of smaller objects with only finals data
   
    let winners = finalsArray.map( element => {
      
      if (element["Home Team Goals"] > element["Away Team Goals"]) { // conditional to determine winner
      // console.log(`${element["Home Team Name"]} is the winner of the World Cup!`); 
      return element["Home Team Name"];
      } else if (element["Home Team Goals"] < element["Away Team Goals"]) {
      // console.log( `${element["Away Team Name"]} is the winner of the World Cup!`);
      return element["Away Team Name"];
      } // end of conditional
  
      });
    return winners;
  } // end of function

// TEST CODE
var output = getWinners(fifaData, getFinals);
console.log(output);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, callback1, callback2) {
    let countries = callback1(data); // getWinners returns an array of strings that are winner country names
    let years = callback2(data); // getYears returns an array of integers that are the years of each entry
  
    // console.log(countries); // returns countries array.  Is correct.
    //   console.log(countries.length); // countries.length should === years.length.  True
    // console.log(years); // returns years array. Is correct
    //   console.log(years.length);// countries.length should === years.length.  True
  
    //   .map SYNTAX:   let newArray = arr.map(callback(currentValue[, index[, array]]) {}
    let winnerStatement = years.map((year, i) => { // declare var for index
  
      let country = countries[i];
      // console.log(`In ${year}, ${country} won the world cup!`);
  
    }) // end of .map loop
  
    return winnerStatement.join(" "); // convert array to a set of strings seperated by a space
  
  }; // end of function
  
  
  // TEST CODE
  var output = getWinnersByYear(fifaData, getWinners, getYears);
  console.log(output);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let aveHome = 0;
    let aveAway = 0;
  
  function getHomeTeamGoals(partial, next) { // create helper func to get total home goals
    let entry = next;
    let numGoals = entry["Home Team Goals"];
    return partial + numGoals;
  }
  
  function getAwayTeamGoals(partial, next) { // create helper func to get total away goals
    let entry = next;
    let numGoals = entry["Away Team Goals"];
    return partial + numGoals;
  }

// .reduce SYNTAX: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let homeTotal = data.reduce(getHomeTeamGoals, 0); // gives total home goals
let awayTotal = data.reduce(getAwayTeamGoals, 0); // gives total home goals

aveHome = homeTotal/data.length; // calculate home average
aveHome = aveHome.toFixed(2);  // fix decimals to 2

aveAway = awayTotal/data.length; // calculate away average
aveAway = aveAway.toFixed(2);  // fix decimals to 2

return `Average home team goals was ${aveHome} per match.  Average away team goals was ${aveAway} per match.`
}; // end of function
  
  // TEST CODE
  var output = getAverageGoals(fifaData);
  console.log(output);

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
