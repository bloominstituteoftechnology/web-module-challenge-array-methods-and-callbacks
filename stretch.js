import { fifaData } from "./fifa.js";
console.log(fifaData);

// Create a function that takes country initials as a parameter and returns their total number of World Cup appearances.

var fifaHomeInitials = fifaData.map(function (item) {
  return item["Home Team Initials"];
});

var fifaAwayInitials = fifaData.map(function (item) {
  return item["Away Team Initials"];
});

var fifaInitials = fifaHomeInitials.concat(fifaAwayInitials);

console.log(fifaInitials);

const data = [fifaInitials];

let uniqueTeams = [...new Set(data.map((item) => item.Initials))];
console.log(uniqueTeams);
