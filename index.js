
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

let finalHomeTeamName = fifaData.filter((home) => {
    return home.Year == "2014" && home.Stage == "Final";
});
console.log(finalHomeTeamName);
console.log(finalHomeTeamName[0]["Home Team Name"]);
console.log(finalHomeTeamName[0]["Away Team Name"]);
console.log(finalHomeTeamName[0]["Home Team Goals"]);
console.log(finalHomeTeamName[0]["Away Team Goals"]);

function getWinner() {
    if (finalHomeTeamName[0]["Home Team Goals"] > finalHomeTeamName[0]["Away Team Goals"]) {
        console.log(finalHomeTeamName[0]["Home Team Name"]);
    } else {
        console.log(finalHomeTeamName[0]["Away Team Name"]);
    }
}
getWinner();

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    
  const filterFinals = data.filter((final) => {
      return final["Stage"] == "Final";
  });
  return filterFinals;
}
  
console.log(getFinals(fifaData));

// const filterLargeStates = data.filter((state) => {
//     return state.population >= 650000;
//   });

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callBack,data) {
    let arr = callBack(data);
    let newArr = arr.map((years) => {
        return years.Year;
    });
   return newArr;
};
console.log(getYears(getFinals,fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, data) {

    let arr = callback(data);
   let newArr = arr.map((data) => {
    if (data["Home Team Goals"] > data["Away Team Goals"]) {
        return data["Home Team Name"];
    }
    else { return data["Away Team Name"];
}
   });
   return newArr;
    }
    console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 function getWinnersByYear(callback1, callback2) {

    let winner = callback1(getFinals, fifaData);

        let year = callback2(getFinals, fifaData);

    for(let i = 0; i < winner.length; i++) {

        console.log("In " + year[i] + ", " + winner[i] + " won the world cup!");

    };
 }
 getWinnersByYear(getWinners, getYears);


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const averageHome = data.reduce((totalHome, goalHome) => {
        let sumHome = totalHome + goalHome["Home Team Goals"];
        return sumHome;
    }, 0);

    const averageHomeGoals = averageHome / data.length;
    console.log(averageHomeGoals);

    const averageAway = data.reduce((totalAway, goalAway) => {
        let sumAway = totalAway + goalAway["Away Team Goals"];
        return sumAway;
    }, 0);

    const averageAwayGoals = averageAway / data.length;
    console.log(averageAwayGoals);

}
getAverageGoals(fifaData);


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
