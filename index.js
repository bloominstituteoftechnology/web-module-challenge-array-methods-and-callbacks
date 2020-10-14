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


// a 
fifaData.filter(item =>
    { 
    if(item.Year === 2014 && item.Stage === "Final")
    { 
        console.log(item["Home Team Name"]); 
    }
    });

// b
fifaData.filter(item =>
    { 
    if(item.Year === 2014 && item.Stage === "Final")
    { 
        console.log(item["Away Team Name"]); 
    }
    });

// c
fifaData.filter(item =>
    { 
    if(item.Year === 2014 && item.Stage === "Final")
    { 
        console.log(item["Home Team Goals"]); 
    }
    });

// d
fifaData.filter(item =>
    { 
    if(item.Year === 2014 && item.Stage === "Final")
    { 
        console.log(item["Away Team Goals"]); 
    }
    });

// e

fifaData.filter(item =>
    { 
    if(item.Year === 2014 && item.Stage === "Final")
    { 
        if(item["Home Team Goals"] > item["Away Team Goals"])
        {
            console.log(item["Home Team Name"]); 
        }
        else if(item["Home Team Goals"] < item["Away Team Goals"])
        {
            console.log(item["Away Team Name"]); 
        }
        else
        { 
            console.log("It was a tie");
        }
    }
    });

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let returnData = []; 
    data.filter(item => 
        {
            if(item.Stage === "Final")
            { 
                returnData.push(item);
            }
        }
        );

    return returnData; 
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(callback, data) 
// {
//    return callback(data).map(item => item.Year);
// };

// console.log(getYears(getFinals(fifaData));


function getYears(callback)
{ 
    return callback.map(item => item.Year);
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */  

function getWinners(callback) {

    const winners  = [];
    
    callback.filter(item =>
        { 
            if(item["Home Team Goals"] > item["Away Team Goals"])
            {
                winners.push(item["Home Team Name"]);
            }
            else if(item["Away Team Goals"] > item["Home Team Goals"])
            { 
                winners.push(item["Away Team Name"]);
            }
            else 
            {
                winners.push((`${item["Home Team Name"]} and ${item["Away Team Name"]}`));
            }
        })

        return winners; 

};

getWinners(getFinals(fifaData));

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersCallback, yearsCallback, data) {
    const winnersArr = winnersCallback(data);
    const yearsArr = yearsCallback(data); 

    const stringsArr = []; 
    
    if(winnersArr.length === yearsArr.length)
    { 
        for(let i = 0; i < winnersArr.length; i++)
        { 
            stringsArr.push(`In ${yearsArr[i]}, ${winnersArr[i]} won the world cup!`);
        }
    }
    else 
    { 
        return "There was an error"; 
    }
    

    return stringsArr;
};

getWinnersByYear(getWinners, getYears, fifaData)
console.log(getWinnersByYear(getWinners, getYears, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let averageHome, averageAway; 

    averageHome = data.reduce((accumulator, item) => 
    {
        return accumulator += item["Home Team Goals"];
    },0
    ) / data.length;


    averageAway = data.reduce((accumulator, item) => 
    {
        return accumulator += item["Away Team Goals"];
    },0
    ) / data.length;

    return `Average Home Goals: ${averageHome} | Average Away Goals ${averageAway}`;
};

getAverageGoals(fifaData);
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
