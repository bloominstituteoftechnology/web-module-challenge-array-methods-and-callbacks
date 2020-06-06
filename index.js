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
const filter2014 = fifaData.filter((game) => {
    return game.Year == 2014 && game.Stage == 'Final';
});
console.log (filter2014);
console.log (filter2014[0]['Home Team Name']);
console.log (filter2014[0]['Away Team Name']);
console.log (filter2014[0]['Home Team Goals']);
console.log (filter2014[0]['Away Team Goals']);
console.log (filter2014[0]['Win conditions']);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
const finals = data.filter((game) => {
    return game.Stage == 'Final';
});
console.log (finals);
return finals;
}
getFinals(fifaData);



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const finals = callback(fifaData);
    const years = finals.map((game) => {
        return {'Year': game.Year}; 
    });
    console.log(years);
    return years;
};

getYears(getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const finals = callback(fifaData);
    const winners = [];
for (let i = 0;i < finals.length; i++ ){
    const condition = finals[i]['Win conditions'];
    const first = condition.split(' ')[0];
    let homeName = finals[i]['Home Team Name'];
    if(finals[i]['Home Team Goals']>finals[i]['Away Team Goals']){
        winners.push(homeName)
    } else if (finals[i]['Home Team Goals']<finals[i]['Away Team Goals']){
        winners.push(finals[i]['Away Team Name'])} else {
            winners.push(first);
        }    
}
console.log(winners);
return winners;
};

getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackW,callbackY) {
    const years = callbackY(getFinals);
    const winners = callbackW(getFinals);
    for(let i = 0;i < years.length; i++){
    console.log(`In ${years[i].Year}, ${winners[i]} won the World Cup!` )
    }

};

getWinnersByYear(getWinners,getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const length = data.length;
const reduceAwayData = data.reduce((total,score) =>{
    return total += data[0]['Away Team Goals'];
}, 0);
console.log('Away Average:', reduceAwayData/length);
const reduceHomeData = data.reduce((total,score) =>{
    return total += data[0]['Home Team Goals'];
}, 0);
console.log('Home Average:',reduceHomeData/length);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,initials) {
    const winners = [];
    const filterInitial = data.filter((initial) => {
        return initial['Home Team Initials'] == initials || initial['Away Team Initials'] == initials;
    });
    for (let i = 0;i < filterInitial.length; i++ )
    {
        const awayGoals = filterInitial[i]['Away Team Goals'];
        const homeGoals = filterInitial[i]['Home Team Goals'];
        const homeInitials = filterInitial[i]['Home Team Initials'];
        if(homeGoals> awayGoals)
        {
            winners.push(homeInitials)
        } 
        else if (homeGoals < awayGoals)
        {
            winners.push(filterInitial[i]['Away Team Initials'])
        }    
    };
    const filterInitialWinner = winners.filter((winner) => {
        return winner == initials; 
    }
    )  
console.log(filterInitialWinner.length)
}
getCountryWins(fifaData, "CMR");


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function howManyGoals(data,teamInitial){

    let totalPoints = 0;
    const filterInitialHome = data.filter((initial) => {
        return initial['Home Team Initials'] == teamInitial;
    });
    const filterInitialAway = data.filter((initial) => {
        return initial['Away Team Initials'] == teamInitial;
    });
    for (let i = 0; i < filterInitialAway.length; i++){
        const awayGoals = filterInitialAway[i]['Away Team Goals']
        totalPoints += awayGoals; 
    }
    for (let i = 0; i < filterInitialHome.length; i++){
        const homeGoals = filterInitialHome[i]['Away Team Goals']
        totalPoints += homeGoals;
    }
    const homeArrayL = filterInitialHome.length;
    const awayArrayL = filterInitialAway.length;
    console.log('HOME',homeArrayL,'AWAY',awayArrayL, 'TOTAL POINTS', totalPoints)
}

howManyGoals(fifaData, "CMR")




/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
