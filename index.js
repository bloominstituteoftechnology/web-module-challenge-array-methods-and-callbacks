import { fifaData } from './fifa.js';

console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
*/
//(a) Home Team name for 2014 world cup final
//console.log(fifaData[1]["Home Team Name"]);
const filterHomeTeam = fifaData.filter((match) => {
	return match.Year >= 2014 && match.Stage === "Final";
});
console.log(filterHomeTeam[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
const filterAwayTeam = fifaData.filter((match) => {
	return match.Year >= 2014 && match.Stage === "Final";
});
console.log(filterAwayTeam[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
const filterHomeGoal = fifaData.filter((match) => {
	return match.Year >= 2014 && match.Stage === "Final";
});
console.log(filterHomeGoal[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
const filterAwayGoals = fifaData.filter((match) => {
	return match.Year >= 2014 && match.Stage === "Final";
});
console.log(filterAwayGoals[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final 
let filterWinner= fifaData.filter((match) => {
	return match.Year >= 2014 && match.Stage === "Final";
});
console.log(filterWinner[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
	let newFinals = data.filter((finals) => {
		return finals.Stage === "Final";
	});
	return newFinals;
    /* code here */
};
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callBack,data) {
	 let arr = callBack(data);
	 let newArr = arr.map((years) => {
	 	return years.Year;
	 });
    /* code here */
	return newArr;
};

console.log(getYears(getFinals,fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
/*"Home Team Name": "Netherlands",
      "Home Team Goals": 0,
      "Away Team Goals": 0,
      "Away Team Name": "Argentina", */
      /*function getWinners(callBack,data) {
	let arr = callBack(data);
	const newArr = arr.map((newData) => {
		for(i = 0; i < arr.length; i++)
		if (arr[i]["Home Team Goals"] > arr[i]["Away Team Goals"]){
			console.log(arr[i]["Home Team Name"]);
		}
		else {
			console.log(arr[i]["Away Team Name"]);
		}
	});
	return newArr;
};

console.log(getWinners(getFinals,fifaData));
*/
/*	const newArr = []; 
	arr.forEach((data,index) => {
			if (arr[index]["Home Team Goals"] > arr[index]["Away Team Goals"]){
			newArr.push(arr[index]["Home Team Name"]);
		}
		else {
			newArr.push(arr[index]["Away Team Name"]);
		}
	});
  	return newArr;
}; */
function getWinners(callBack,data) {
	let arr = callBack(data);
		let newArr = arr.map((data) => {
			if (data["Home Team Goals"] > data["Away Team Goals"]){
			return (data["Home Team Name"]);
		}
		else if (data["Away Team Goals"] > data["Home Team Goals"]){
			return (data["Away Team Name"]);
		}
		else{
			return data["Win conditions"];
		}
		});
		return newArr;
};

console.log(getWinners(getFinals,fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
"In {year}, {country} won the world cup!" 
Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cB1,cB2) {
	let years = cB1(getFinals,fifaData);
	let winners = cB2(getFinals,fifaData);
	for(let i=0; i<years.length; i++){
	console.log( `In ${years[i]}, ${winners[i]} won the world cup!`);
	}
};
console.log(getWinnersByYear(getYears,getWinners));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
	 const home = data.reduce((acc, cv) => {
		return acc += cv["Home Team Goals"]; 
	},0);
	const away = data.reduce((acc , cv) => {
		return acc += cv["Away Team Goals"];
	},0);
   return ` Average Home Team Goals : ${home/data.length} Average Away Team goals ${away/data.length} `;

};

console.log(getAverageGoals(fifaData));

function getAverage3(data){
	let newArr = [];
	for(let i = 1930; i <= 2018; i += 4){
		let arr = data.filter((year) => {
			return year.Year == i;
		});
	const home = arr.reduce((acc, cv) => {
		return acc += cv["Home Team Goals"]; 
	},0);
	const away = arr.reduce((acc , cv) => {
		return acc += cv["Away Team Goals"];
	},0);
	
	let average = home + away;
			newArr.push({"Year": i, "average_goals": average/arr.length});
		}
		return newArr;
	}

console.log(getAverage3(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,ti) {
		let newFinals = data.filter((finals) => {
		return finals.Stage === "Final";
	});
		let newArr = newFinals.map((teamStat) => {
		if (teamStat["Home Team Goals"] > teamStat["Away Team Goals"]){
			return (teamStat["Home Team Initials"]);
		}
		else{
		return (teamStat["Away Team Initials"]);
		}
    });
    function countArray(newArr, ti){
    let filtArray = newArr.filter(item => item == ti).length;
	return `${ti} won the championship ${filtArray} times!`;
	}
	console.log(countArray(newArr,ti));
};

getCountryWins(fifaData,'ITA');
getCountryWins(fifaData,'GER');
getCountryWins(fifaData,'FRG');


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
