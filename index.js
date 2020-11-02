import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

function returnHome2014(array){
    for (let i = 0; i < array.length; i++){
         if (fifaData[i].Year === 2014){
            console.log("Home: ", fifaData[i]["Home Team Name"]);
       }
     }
    
 };


(b) Away Team name for 2014 world cup final

function returnAway2014(array){
     for (let i = 0; i < array.length; i++){
         if (fifaData[i].Year === 2014){
           console.log("Away: ", fifaData[i]["Away Team Name"]);
         }
     }
    
 };


(c) Home Team goals for 2014 world cup final

function returnHomeGoals2014(array){
     for (let i = 0; i < array.length; i++){
         if (fifaData[i].Year === 2014){
             console.log(`Home: ${fifaData[i]["Home Team Name"]}, Goals: ${fifaData[i]["Home Team Goals"]}`);
         }
     }
    
 };


(d) Away Team goals for 2014 world cup final

function returnHomeGoals2014(array){
    for (let i = 0; i < array.length; i++){
        if (fifaData[i].Year === 2014){
           console.log(`Home: ${fifaData[i]["Home Team Name"]}, Goals: ${fifaData[i]["Home Team Goals"]}`);
       }
     }
    
 };

(e) Winner of 2014 world cup final */

function returnWinner2014(array){
         for (let i = 0; i < array.length; i++){
            if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final" && fifaData[i]["Home Team Goals"] > fifaData[i]["Away Team Goals"] ){
                 console.log(`The winner is: ${fifaData[i]["Home Team Name"]} with a score of ${fifaData[i]["Home Team Goals"]} - ${fifaData[i]["Away Team Goals"]}`);
             }else{
                 console.log(`The winner is: ${fifaData[i]["Away Team Name"]} with a score of ${fifaData[i]["Away Team Goals"]} - ${fifaData[i]["Home Team Goals"]}`);
            }
        }
        
     };
    
    returnWinner2014(fifaData);
    

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const fifaDataFinal = data.filter(item =>item.Stage === "Final");
     for (let i = 0; i < data.length; i++){
        if(data[i].Stage === "Final"){
            fifaDataFinal.push(data[i]);
        }
     }
        return fifaDataFinal;  
        };
        console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    const years = cb.map(item =>item.Year);
    // for (let i = 0; i < cb.length; i++){
    //         years.push(cb[i].Year);
    // }
    return years;
 }
console.log(getYears(getFinals(fifaData)));


getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    const winners = cb.map((item) => {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            return item["Home Team Name"];
        }else if(item["Away Team Goals"] > item["Home Team Goals"]){
            return item["Away Team Name"];
        }else if(item["Away Team Goals"] === item["Home Team Goals"] && item["Win conditions"].split(' ')[0] === item["Home Team Name"]){
            return item["Home Team Name"];
        }else if(item["Away Team Goals"] === item["Home Team Goals"] && item["Win conditions"].split(' ')[0] === item["Away Team Name"]){
            console.log(winners);
            return item["Away Team Name"];
        }
    });
    return winners;
    }
console.log(getWinners(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb, cb2) {
    const winners = cb2.map((country, index)=>{
        return `In ${cb[index]}, ${country} won the world cup`;
    })
    return winners;
};
console.log(getWinnersByYear(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData))));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeAvg = data.reduce((acc, currentValue)=>acc + currentValue["Home Team Goals"], 0);
    let awayAvg = data.reduce((acc, currentValue)=>acc + currentValue["Away Team Goals"], 0);
    return {
        "Home Teams Average": (homeAvg / data.length).toFixed(2), "Away Teams Average": (awayAvg / data.length).toFixed(2)
    }
    };
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
