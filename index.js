// import { fifaData } from "./fifa.js";

// Sample data.

const fifaData = [
  {
    Year: 1930,
    Stage: "Not so much.",
    "Home Team Name": "Uruguay",
    "Home Team Goals": 1,
    "Away Team Goals": 0,
    "Away Team Name": "Peru",
  },
  {
    Year: 2014,
    Stage: "Final",
    "Home Team Name": "Chile",
    "Home Team Goals": 3,
    "Away Team Goals": 2,
    "Away Team Name": "France",
  },
  {
    Year: 2014,
    Stage: "Final",
    "Home Team Name": "Argentina",
    "Home Team Goals": 2,
    "Away Team Goals": 3,
    "Away Team Name": "Mexico",
  },
];

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first*/

// (a) Home Team name for 2014 world cup final

console.log(
  fifaData
    .filter(i => i["Year"] === 2014 && i["Stage"] === "Final") // year & final parse
    .map(i => i["Home Team Name"]) // Only home name.
);

//(b) Away Team name for 2014 world cup final

console.log(
  fifaData
    .filter(i => i["Year"] === 2014 && i["Stage"] === "Final") // year & final parse
    .map(i => i["Away Team Name"]) // Only away name.
);

// //(c) Home Team goals for 2014 world cup final

console.log(
  fifaData
    .filter(i => i["Year"] === 2014 && i["Stage"] === "Final") // year & final parse
    .map(i => i["Home Team Goals"]) // Only home name.
);

//(d) Away Team goals for 2014 world cup final

console.log(
  fifaData
    .filter(i => i["Year"] === 2014 && i["Stage"] === "Final") // year & final parse
    .map(i => i["Away Team Goals"]) // Only home name.
);

//(e) Winner of 2014 world cup final */

const winner2014 = fifaData
  .filter(i => i["Year"] === 2014 && i["Stage"] === "Final")
  .map(i => {
    if (i["Home Team Goals"] > i["Away Team Goals"]) {
      return i["Home Team Name"];
    } else {
      return i["Away Team Name"];
    }
  });
console.log(winner2014);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage
hint - you should be looking at the stage key inside of the objects*/

function getFinals(arr) {
  return arr.filter(i => i.Stage === "Final");
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// finalsCB(arr) returns all objects containing "Stage: Final."
// .map Year returns all years from the Finals object.

function getYears(arr, finalsCB) {
  return finalsCB(arr).map(i => i.Year);
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

// finalsCB(arr) returns all objects containing "Stage: Final."
// .map / if / condition statements parse out highest scores and returns Team Names.

function getWinners(arr, getFinalsCB) {
  return getFinalsCB(arr).map(i => {
    if (i["Home Team Goals"] > i["Away Team Goals"]) {
      return i["Home Team Name"];
    } else {
      return i["Away Team Name"];
    }
  });
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 
hint: the strings returned need to exactly match the string in step 4.*/

// _________________________ COMMENTS _______________________

// getYearsCB returns an array of years from objects containing "Stage: Final", it does so because "getFinals" is passed in as an argument.

// getWinnersCB returns an array of winning team names from objects containing "Stage: Final", it does so because "getFinals" is passed in as an argument.

// "years.map((i, index) => `In ${i}, ${winners[index]} won the world cup!`);"
//The "index" parameter works like the "i" in a standard for loop. So "winners[index]" is iterating through the winners array. Whenever you want .map to iterate over more than 1 array, you need to add a second parameter like [index] in the example below, otherwise the first parameter is fine.

function getWinnersByYear(arr, getYearsCB, getWinnersCB) {
  const years = getYearsCB(arr, getFinals);
  const winners = getWinnersCB(arr, getFinals);
  return years.map((i, index) => `In ${i}, ${winners[index]} won the world cup!`);
}

// console.log(getWinnersByYear(fifaData, getYears, getWinners));

// ______________ Long way, just for comparison _______________
// function getWinnersByYear(arr, getYearsCB, getWinnersCB) {
//     let year = getYearsCB(arr, getFinals);
//     let winner = getWinnersCB(arr, getFinals);
//     let result = [];
//     for(let i = 0; i< year.length; i++){
//         result.push(`In ${year[i]}, ${winner[i]} won the world cup!`)
//     }
//     return result;
//   }

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. */

// The sum variable stores the sum of all of the goals scored by finalists.
// .reduce reduces, reducers gonna reduce. Too many hours on this....
// Notice the invoking of getAverageGoals also invokes another function AND an argument inside that function. Inception...

function getAverageGoals(finalistsCB) {
  const sum = finalistsCB.reduce((accum, item) => {
    return accum + item["Home Team Goals"] + item["Away Team Goals"];
  }, 0);
  return (sum / finalistsCB.length).toFixed(2);
}

// console.log(getAverageGoals(getFinals(fifaData)));
//
//
//
//
//
//
// /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
// function foo() {
//   console.log("its working");
//   return "bar";
// }
// export default {
//   foo,
//   getFinals,
//   getYears,
//   getWinners,
//   getWinnersByYear,
//   getAverageGoals,
// };
