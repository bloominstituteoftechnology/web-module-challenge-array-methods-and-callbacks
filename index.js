import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/*Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/

function getTeamName(array, year){
    HomeTeamName = this.HomeTeamName
    return HomeTeamName;
}

console.log(getHomeTeamName(fifaData, 2014));

// (b) Away Team name for 2014 world cup final

function getAwayTeamName(array, year){
    AwayTeamName = this.AwayTeamName
    return HomeTeamName;
}

console.log(getAwayTeamName(fifaData, 2014));

// (c) Home Team goals for 2014 world cup final

function getHomeTeamGoals(array, year){
    HomeTeamGoals = this.HomeTeamGoals
    return HomeTeamGoals;
}

console.log(getHomeTeamGoals(fifaData, 2014));

// (d) Away Team goals for 2014 world cup final

function getAwayTeamGoals(array, year){
    AwayTeamGoals = this.AwayTeamGoals
    return AwayTeamGoals;
}

console.log(getAwayTeamGoals(fifaData, 2014));

// (e) Winner of 2014 world cup final */

function getWinnerTeam(array, year){
    if(HomeTeamGoals > AwayTeamGoals){
        WinnerTeam = HomeTeamName 
    }else if(AwayTeamGoals > HomeTeamGoals){
        WinnerTeam = AwayTeamName
    }
    console.log(WinnerTeam);
}

console.log(getWinnerTeam(fifaData, 2014));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {
    const finalsdata = array.filter(function(item){
        return item.stage = "Group 4";
}
        console.log(finalsdata)
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array) {

    getFinals(array) {
        const years = array.filter(function(item){
            return item.year = year;
        }
            console.log(years)
    }
}

console.log(getYears(fifaData))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(fifaData) {
    getFinals(fifaData) ;{

        const HomeTeamGoals = finalsdata.filter(function(item){
            return item.HomeTeamGoals = HomeTeamGoals;
        }

        const AwayTeamGoals = finalsdata.filter(function(item){
            return item.AwayTeamGoals = AwayTeamGoals;
        }

        const winners = 
        
        if(HomeTeamGoals[i] > AwayTeamGoals[i]){
        return "Home Team Name";

        }else if(AwayTeamGoals[i] > HomeTeamGoals[i]){
        return "Away Team Name";
        }
    
        console.log(winners);

     }


getWinners(fifaData);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(array) {
    getWinners(array);
    getYears(array);
    return `In ${this[i].year}, ${this[i].name} won the world cup!`;
    }
};

getWinnersByYear(fifaData);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {
    const AvHomeTeamGoals = array.reduce(function(accumulator, item){
        return ((accumulator + item.HomeTeamGoals)/(array.length))
    }, 0);

    const AvAwayTeamGoals = array.reduce(function(accumulator, item){
        return ((accumulator + item.AwayTeamGoals)/(array.length))
    }, 0);
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
