import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing 
the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const fifaFinals = fifaData.filter((fifa) => {
    return fifa.Year == 2014 && fifa.Stage == 'Final' && fifa["Home Team Name"];
    
});
console.log(fifaFinals);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and 
returns an array of objects with only finals data */

// Use .filter?

function getFinals(data) {
    
    // let finalsData =[];

    // for(let i = 0; i < data.length; i++){

    //     if (data[i].Stage === 'Final'){
    //         
    //         finalsData.push(data[i]);
    //     }
    // }
    
    // return finalsData;

    const finalsData = fifaData.filter((info) => {
        return info.Stage == "Final";
    });


}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback 
function `getFinals`, and returns an array called `years` containing all 
of the years in the dataset */

function getYears(callback, data) {

    // let years = [];

    // for(let i = 0; i < fifaData.length; i++){
    //     if (fifaData[i].Stage === 'Final'){
    //         let yearSlot = {};
    //         yearSlot = fifaData[i].Year;
    //         years.push(yearSlot);
    //     }   
    // } 
    // return years;   

    const years = data.map(callback(info), {
        return {'Year': info.Year}
    });

}

console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback 
function `getFinals()` and determine the winner (home or away) of each `finals` game. 
Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, data) {

    // let winners = [];

    // for (let i = 0; i < fifaData.length; i++){

    //     if (fifaData[i].Stage === 'Final'){
    //         if(fifaData[i]['Home Team Goals'] > fifaData[i]['Away team Goals'])
    //         {
    //             let winner = {};
    //             winner = fifaData[i]['Home Team Name'];
    //             winners.push(winner);
    //         }else{
    //             let winner = {};
    //             winner = fifaData[i]['Away Team Name'];
    //             winners.push(winner);
    //         }
    //     }   
    // }

    // return winners;
}

console.log(getWinners(getFinals(), fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the
 following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    // let yearsAndWinners = [];

    // for (i = 0; i < getWinners.length; i++){
    //     yearsAndWinners.push(`In ${yearsList[i]}, ${winnersList[i]} won the world cup!`);
    // }

    let winners = getWinners();
    let years = getYears();

    years.map(getWinners())
    

    return yearsAndWinners;
}

console.log(getWinnersByYear(getWinners(),getYears()));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns
 the the average number of home team goals and away team goals scored per match 
 (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    // let totalGoalsScored = 0;
    // for (let i = 0; i < data.length; i++){
    //     totalGoalsScored = totalGoalsScored + data[i]['Home Team Goals'] + data[i]['Away Team Goals'];
    // }
   
    // let averageGoalsScored = totalGoalsScored / data.length;
       
    // return averageGoalsScored;
    

}

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
