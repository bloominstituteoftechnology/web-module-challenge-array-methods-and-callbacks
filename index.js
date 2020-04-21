import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// (a)
const homeTeam2014 = []; //new array
fifaData.forEach(function (item){ //forEach to iterate over
    if (item["Year"] === 2014){
        homeTeam2014.push(item["Home Team Name"]);
    }
    return homeTeam2014;
});
//console.log(homeTeam2014);

// (b)
const awayTeam2014 = []; //new array
fifaData.forEach(function (item){ //forEach to iterate over
    if (item["Year"] === 2014){
        awayTeam2014.push(item["Away Team Name"]);
    }
    return awayTeam2014;
});
//console.log(awayTeam2014);

// (c)

const homeTeamGoals2014 = []; //new array
fifaData.forEach(function (item){ //forEach to iterate over
    if (item["Year"] === 2014){
        homeTeamGoals2014.push(item["Home Team Goals"]);
    }
    return homeTeamGoals2014;
});
//console.log(homeTeamGoals2014);

// (d)

const awayTeamGoals2014 = []; //new array
fifaData.forEach(function (item){ //forEach to iterate over
    if (item["Year"] === 2014){
        awayTeamGoals2014.push(item["Away Team Goals"]);
    }
    return awayTeamGoals2014;
});
//console.log(awayTeamGoals2014);

// (e)

//Winner of 2014

//no need for forEach or filter because already have variables
// if Home Team Goals are higher then away team goals
if (homeTeamGoals2014 > awayTeamGoals2014){ //if Home is higher than Away
    console.log(homeTeam2014[0]); // logs home team 
}else if (awayTeamGoals2014 > homeTeamGoals2014){ //if Away team is higher than Home
    console.log(awayTeam2014[0]); // logs away team
} //closes if statements


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) { //data is the array we are looking at
    //variable that = array.filtered of data
     const finalData = fifaData.filter(function(data){ 
         //return data.key === the string "";
        return data["Stage"] === "Final"; 
    })
   return finalData;
   
};
//invoked function 
//console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) { // getFinals is callback we want to look thru
    //return the getFinals fifaData with map
    return getFinals(fifaData).map(function(data){ 
        //return the data[Year]
         return data["Year"];
    });
};
//console log function(parameter)
//console.log(getYears(getFinals));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
//new array called winners
// const winners =[];
// function getWinners(getFinals) { //getFinals callback we want to look thru
//     //go over getFinals
//     return getFinals(fifaData).forEach(function(data){
//         // check to see is home or away team score is higher
//         if (data["Home Team Goals"] > data["Away Team Goals"] || data["Away Team Goals"] > data["Home Team Goals"]){
//             //push winning team name into winners array
//             winners.push(data["Home Team Name"]);
//         }//end if statement
//         //return winners array
//         return winners; //changed to consol log to see if works and it does
//     })
// };
 // Works but need to get console log correct
//console.log(getWinners(getFinals));

function getWinners(callback) {
    let winners = callback.map(function(final){
        if (final["Home Team Goals"] > final["Away Team Goals"]){
        return final["Home Team Name"]
    }else{
        return final["Away Team Name"]
    }
    });
    return winners;
};
//console.log(getWinners(getFinals(data)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
//comesback undefined
// function getAllWinners(data) {
//     //if data = getYears year
// if (data === getYears["Year"]){
//     //if get Years Year is === get Winners Year
//     if (getYears["Year"] === getWinners["Year"]){
//     //return year and country
//     return getYears["Year"], getWinners["Home Team Name"];
// }//close inside if
// }// close outside if
//     //return string
//     return `"In ${getYears["Year"]}, ${getWinners["Home Team Name"]} won the world cup! `

// }; //close function
// console.log(getAllWinners(2014));

function getWinnersByYear(winners, years) {
for (let i=0; i < winners.length; i++){
    console.log(`In ${years[i]},${winners[i]} won the World Cup.`)
    }
};
getWinnersByYears(getWinners(getFinals(data)), getYears(getFinals(data)));
/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) { // takes data and team initials as parameters
    let count = 0; //counter
    let teamMatches = data.map(function(match){
        if (match["Home Team Goals"] > match["Away Team Goals"] || match["Win conditions"].includes(match["Home Team Name"])){ //give me name of team with highest score
            return match["Home Team Initials"]
        }else{
            return match["Away Team Initials"]
        }//end else
    
        })
        teamMatches.forEach(function(item){
            if(item === teamInitials){ //it initials match team initials
                count++ // add 1
            }
        })
        return `${teamInitials} has won ${count} games`;
    }

    console.log(getCOuntryWIns(data, "BRA"));

    // for all team initials taht match data.team initials reduce
    // count ++ for the same team initials for reduce?
    // if team initials match get country wins initials
    // returns the number of world cupe wins that country has

    /* code here */

};

// getCountryWins();



//STRETCH
/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();

//STRETCH
/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

//STRETCH
/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
 let homeTeamGoals = data.map(function(item){
     return item["Home Team Goals"]
 })
 let awayTeamGoals = data.map(function(item){
     return item["Away Team Goals"]
 })
 //change Home team goals away to a value using reduce
 let avgHomeGoals = homeTeamGoals.reduce(function(accumulator, currentValue){
     return accumulator + currentValue
 }, 0) / homeTeamGoals.length
};
let avgAwayGoals = awayTeamGoals.reduce((accumulator, currentValue) => { return accumulator + currentValue 
}, 0) / awayTeamGoals.length

console.log(`Home Team Avg: ${avgHomeGoals.toFixed(2)}, Away Team Avg: ${awayTeamGoals.toFIxed(2)}`)


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */