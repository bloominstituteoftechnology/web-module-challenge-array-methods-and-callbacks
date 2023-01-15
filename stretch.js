const { fifaData } = require('./fifa.js')
/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
//i give up on this one
    
    /* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
    Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */


    function getGoals(data) {
    let highestGoal = 0;
    let teamName = "";
    data.map((element) => {
        if (element["Home Team Goals"] > highestGoal)
        {
            highestGoal = element["Home Team Goals"];
            teamName = element["Home Team Name"];
        } 
        if (element["Away Team Goals"] > highestGoal)
        {
            highestGoal = element["Away Team Goals"];
            teamName = element["Away Team Name"];
        } 
    });
    return `Team ${teamName} has the highest goal in a World Cup Finals with the score of ${highestGoal}`;
    }

console.log(getGoals(fifaData));
    
    
    /* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
    Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */
    
    function badDefense(data) {
        let highestGoal = 0;
        let winnerTeamName = "";
        let loserTeamName = "";
        data.map((element) => {
            if (element["Home Team Goals"] > highestGoal)
            {
                highestGoal = element["Home Team Goals"];
                winnerTeamName = element["Home Team Name"];
                loserTeamName = element["Away Team Name"];
            } 
            if (element["Away Team Goals"] > highestGoal)
            {
                highestGoal = element["Away Team Goals"];
                winnerTeamName = element["Away Team Name"];
                loserTeamName = element["Home Team Name"];
            } 
        });
        return `Team ${loserTeamName} has the has the worst defense against ${winnerTeamName} with a score of ${highestGoal} score against them.`;
        }

console.log(badDefense(fifaData));