import {
  fifaData
} from './fifa.js';

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(arr, initials) {
  let wins = 0
  let teamName = arr.filter(item => item["Home Team Name"] === initials) || arr.filter(item => item["Away Team Name" === initials])
  let finalTeams = arr.filter(item => item.Stage === "Final")
  for (const i in finalTeams) {
    if (finalTeams[i]["Home Team Initials"] === initials && finalTeams[i]["Home Team Goals"] > finalTeams[i]["Away Team Goals"]) {
      wins += 1
    } else if (finalTeams[i]["Away Team Initials"] === initials && finalTeams[i]["Away Team Goals"] > finalTeams[i]["Home Team Goals"]) {
      wins += 1
    }
  }
  console.log(teamName)
  return wins
}




/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(arr) {
  let finalTeams = arr.filter(item => item.Stage === "Final")

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense( /* code here */ ) {

  /* code here */

}