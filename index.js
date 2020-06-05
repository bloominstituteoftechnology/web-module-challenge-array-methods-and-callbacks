import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const final2014 = fifaData.filter((game)=>{
    return game.Year == 2014 && game.Stage == "Final";
});
console.log(final2014[0]["Home Team Name"]);
console.log(final2014[0]['Away Team Name']);
console.log(final2014[0]['Home Team Goals']);
console.log(final2014[0]['Away Team Goals']);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

//  function getFinals() {


// }


const getFinals = fifaData.filter((index)=>{
    return index.Stage == "Final";
});
console.log(getFinals);


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` 
containing all of the years in the dataset */

// function getYears(cb) {
    

// };

// getYears();
const getYears = getFinals.map((years)=>{
    return years.Year;
});
console.log(getYears);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 



const getWinners = getFinals.map((winner)=>{
     
    if(winner["Home Team Goals"]> winner["Away Team Goals"]){
        return winner["Home Team Name"];
    }else {
        return winner["Away Team Name"];
    }
})

console.log(getWinners);


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings 
"In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


const getWinnersByYear = ()=>{
    let champArr = [];
    for(let i = 0; i < getFinals.length; i++)
    {
        champArr.push(`In ${getYears[i]}, ${getWinners[i]} won the world cup!`);
    }
    return champArr;
    }

console.log(getWinnersByYear());

// const getWinnersByYear = getFinals.map((getWinners)=>{
//     for (let i=0; i<getYears.length; i++)   
//      {return `In ${getYears[i]}, ${getWinners} won the world cup`;}
   
//  });
//  console.log(getWinnersByYear);


 
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

