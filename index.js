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
    let a=[];
    
        return a = data.filter(e => 
            e.Stage === 'Final'
             );
    
  

};
 let aob = getFinals(fifaData);
console.log('aob '+aob);
 
 // console.log(aob);
// // Just print out each object name value pairs
//     aob.forEach(function (o) {
//         this.appendChild(document.createTextNode(Object.keys(o).map(function (k) {
//             return k + ': ' + JSON.stringify(o[k]);
//         }).join(', ')));
//         this.appendChild(document.createElement('br'));
//     }, document.getElementById('Task2'));
/* Task 3: Implement a higher-order function called `getYears` 
that accepts the callback function `getFinals`, and returns an array called
 `years` containing all of the years in the dataset */

function getYears(data) {
    let a = data.map(e => e.Year);
    //  function getFinals(){
    //     for(let i = 0; i< fifaData.length; i++){
    //         years[i]  = fifaData[i].Year;
    //     }
    //     return years;
    // }
    return a;
};

// function getYears(getFinals){
//     const years = getFinals.map((curentItem) => {
//     return (curentItem.Year);
//     });
//     return years;
// };
console.log('Years' + getYears(getFinals(fifaData)));

// let yy = getYears(getFinals,fifaData);
// console.log(yy);
// //let yrs = y();
//     console.log("Task3");
//     for(let a = 0; a < yy.length; a++){
//         console.log(yy[a]);
//     }
/* Task 4: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the winner 
(home or away) of each `finals` game. Return the name of all winning countries 
in an array called `winners` */ 

function getWinners(data) {
let winners = [];
winners = data.map(function(o){
        if(o['Home Team Goals'] > o['Away Team Goals']){
            return o['Home Team Name'];
        }else{
            return o['Away Team Name'];
        }
    });
       return winners; 
  
}
let win = getWinners(fifaData);
//let win = win();
let tsk4Str = '';
let task4Elm = document.querySelector("div#Task4 > p.Info");
//console.log(win[0]);
// Make the task4 String from the array
    for(let i = 0; i < win.length; i++){
        tsk4Str = tsk4Str+' '+win[i];
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
let winrs = getWinners();
//let winners = winrs();
let y = getYears();
console.log(y.length);
console.log(winrs.length);
//let yrs = y();
let restr = '';
    
        // In what year did what winners win
        for(let i = 0; i < y.length; i++){
            for(let ii = 0; ii< winrs.length; ii++){
                if( y[i] === winrs[ii].Year && winrs[ii].Stage === "Final"){
                        
                            if(winrs[ii]['Home Team Goals'] > winrs[ii]['Away Team Goals']){
                                restr = restr + ' In '+ winrs.Year+ ' '+winrs[ii]['Home Team Name'] + ' won the world cup! ';
                            }else if(winrs[ii]['Away Team Goals'] > winrs[ii]['Home Team Goals']){
                                restr = restr + ' In '+ winrs[ii].Year+ ' '+winrs[ii]['Away Team Name'] + ' won the world cup! ';
                            }else if(winrs[ii]['Away Team Goals'] === winrs[ii]['Home Team Goals']){
                                restr = restr + ' In '+ winrs[ii].Year+ ' '+winrs[ii]['Away Team Name'] + ' tied with ' + winrs[ii]['Home Team Name'];
                            }// else error control
                   
                }
            }
        }
        return restr;
    

};

let s = getWinnersByYear(getWinners,getYears);
//let st = s();
// Uncomment Task5
console.log(s);
/* Task 6: Write a function called `getAverageGoals` that accepts a parameter 
`data` 
and returns the the average number of home team goals and away team goals
 scored per 
match (Hint: use .reduce and do this in 2 steps) */

const getAverageGoals = (data) => {

// Average number of home team goals and away team goals 
    
let nR = data.reduce((a,b) =>{
    
    return a['Home Team Goals'] + b['Away Team Goals'] ;
  },0);


  

return nR;
};

let avGoals = getAverageGoals(fifaData);
// Why do I get NaN reducer won't work
console.log(avGoals);
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters
 `data`
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
