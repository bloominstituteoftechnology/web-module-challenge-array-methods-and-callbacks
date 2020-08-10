import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. 
Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const task1 = ()=>{
    // Get al the 2014 Games
let fourteen = fifaData.filter(a => a.Year == 2014);
let task1Context = [];
let ff = 0;
    // Show all the information from these teams 
    for( let f = 0; f < fourteen.length; f++ ){
        //console.log('Home Team: '+fourteen[f]['Home Team Name'] +   ' Away Team: '+ fourteen[f]['Away Team Name']);

        task1Context[ff] = 'Home Team: '+fourteen[f]['Home Team Name'] + ' Scored: ' + 
        fourteen[f]['Home Team Goals'] +
        ' Away Team: '+ fourteen[f]['Away Team Name'] + ' Scored: ' + fourteen[f]['Away Team Goals'] + '<br>';
        ff +=1;


}
console.log(task1Context.length);
let task1Str = '';
var logElem = document.querySelector("div#Task1 > p.Info");
    for(let i = 0; i < task1Context.length; i++){
        task1Str += task1Context[i];
    }
    logElem.innerHTML = task1Str;
//document.getElementsByClassName("Info").innerHTML  = task1Context[0];
}
task1();



/* Task 2: Create a function called  getFinals that takes 
`data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let a=[{}];
    return a = data.filter(e => 
       e.Stage.includes('finals',0)
        );
  

};
let aob = getFinals(fifaData);
// Just print out each object name value pairs
    aob.forEach(function (o) {
        this.appendChild(document.createTextNode(Object.keys(o).map(function (k) {
            return k + ': ' + JSON.stringify(o[k]);
        }).join(', ')));
        this.appendChild(document.createElement('br'));
    }, document.getElementById('Task2'));
/* Task 3: Implement a higher-order function called `getYears` 
that accepts the callback function `getFinals`, and returns an array called
 `years` containing all of the years in the dataset */

function getYears() {
    let years = [];
    return function getFinals(){
        for(let i = 0; i< fifaData.length; i++){
            years[i]  = fifaData[i].Year;
        }
        return years;
    }

};

let y = getYears();
let yrs = y();
    console.log("Task3");
    for(let a = 0; a < yrs.length; a++){
        console.log(yrs[a]);
    }
/* Task 4: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the winner 
(home or away) of each `finals` game. Return the name of all winning countries 
in an array called `winners` */ 

function getWinners() {
let winners = [];
let hOa = getFinals(fifaData);
    // See if home or away won and return the Team Country Name
    hOa.forEach(function(o){
        if(o['Home Team Goals'] > o['Away Team Goals']){
            winners.push(o['Home Team Name']);
        }else{
            winners.push(o['Away Team Name']);
        }
    });
       return winners; 

    };

let winners = getWinners();
let tsk4Str = '';
let task4Elm = document.querySelector("div#Task4 > p.Info");
//console.log(winners[0]);
// Make the task4 String from the array
    for(let i = 0; i < winners.length; i++){
        tsk4Str = tsk4Str+' '+winners[i];
    }
    task4Elm.innerHTML = tsk4Str;


/* Task 5: Implement a higher-order function called `getWinnersByYear`
 that accepts the following parameters and returns a set of strings "In {year}, 
 {country} won the world cup!" 


Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners,getYears) {
let winners = getWinners();
let yrs = getYears();

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per 
match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals() {

    

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data`
 and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins() {

    

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and 
returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals() {

    

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and
 calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense() {

    

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your
 chosing as listed in the README file. */
