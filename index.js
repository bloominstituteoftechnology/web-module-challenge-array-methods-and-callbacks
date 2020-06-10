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

  const finals2014Team = fifaData.filter((stage) => {
      return stage.Stage == 'Final' && stage.Year == '2014';
  });
  console.log(finals2014Team[0]["Home Team Name"]);
  console.log(finals2014Team[0]["Away Team Name"]);
  console.log(finals2014Team[0]["Home Team Goals"]);
  console.log(finals2014Team[0]["Away Team Goals"]);
  if(finals2014Team[0]["Home Team Goals"] > finals2014Team[0]["Away Team Goals"]){
      console.log(finals2014Team[0]["Home Team Name"])
  }
else{
    console.log(finals2014Team[0]["Away Team Name"])
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
const allFinals = data.filter((finals) => {
    return finals.Stage == 'Final'
});
return allFinals;
};
console.lot(getFinals(fifaData));

    /* code here */

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const years = callback.map((data) => {
        return data.Years;
    });
    return years;
}
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const winners = callback.map((data) => {
        if(data["Home Team Goals"] > data["Away Team Goals"]){
            return data["Home Team Name"];
        }
    else if(data["Home Team Goals"] <data["Away Team Goals"]){
        return data["Away Team Name"];
    }
    else{
        return "Tie";
    }
});
return winners;
}
console.log(getWinners(getFinals(fifaData)));



/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackWinners, callbackgetYears) {
let winners =[];
for(let i=0; i< callbackWinners.length; i++){
    winners.push('In ${callbackGetYears[i]}, ${callbackWinners[i]} won the world cup!')

}
return winners;
};
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
function getAverageGoals(data){
    const averageHome = data.reduce((total, goals, index) => {
        total +=goals["Home Team Goals"];
        if(index == data.length -1){
            return total/data.length;
        }
    else{
        return total;
    }
}, 0);
const averageAway = data.reduce((total, goals, index) => {
    total += goals["Away Team Goals"];
    if(index == data.length -1){
        return total/data.length;
    }
    else{
        return total;
    }
}, 0);
return numOfWins;
};




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
