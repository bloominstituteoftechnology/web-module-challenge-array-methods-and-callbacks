# FIFA Challenge - JavaScript-Foundations

## Advanced JavaScript

## Array Methods and Callbacks
*Note*: Please add the LIVE server extension to your visual studio code and use it for this project. https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer - you will not be able to view this data in the browser or see your console logs without it. 

## Objectives

- Array Methods - demonstrate ability to use `.forEach()` `.map()` `.reduce()` `.filter()` and describe their use cases
- Callbacks - demonstrate the proper use a of a callback function by passing a function to another function as a parameter
  
## Introduction

In this challenge, you will work with a data set summarizing every World Cup game from 1930 to 2014. As web developers, you will often work with JSON data to interact with servers, summarize data, get images to your page, and more. It is crucial that you cultivate a thorough understanding of data structures and methods early in your career.

The data set you are given (loaded in at the top of `index.js`) contains a report for every game played at every stage in the FIFA World Cup tournament since 1930. Each report is an object with many keys, including `Year`,`Stage`, `Stadium`,  `Home Team Name`,`Home Team Goals`, `Away Team Name`, and `Away Team Goals`. There is a plethora of other data in this set as well, but we won't spend time working with it. You can read more about the data [here](https://www.kaggle.com/abecklas/fifa-world-cup) or look at the sample object below if you are interested!

Your goal today will be to manipulate the data using array methods and callbacks to create interesting statistics.

### Sample Data

```js
  {
      "Year": 1930,
      "Datetime": "13 Jul 1930 - 15:00",
      "Stage": "Group 1",
      "Stadium": "Pocitos",
      "City": "Montevideo",
      "Home Team Name": "France",
      "Home Team Goals": 4,
      "Away Team Goals": 1,
      "Away Team Name": "Mexico",
      "Win conditions": "",
      "Attendance": 4444,
      "Half-time Home Goals": 3,
      "Half-time Away Goals": 0,
      "Referee": "LOMBARDI Domingo (URU)",
      "Assistant 1": "CRISTOPHE Henry (BEL)",
      "Assistant 2": "REGO Gilberto (BRA)",
      "RoundID": 201,
      "MatchID": 1096,
      "Home Team Initials": "FRA",
      "Away Team Initials": "MEX"
    },
```

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:


1. Fork the repo
2. Go into canvas and connect your reop to codegrade
3. Clone your forked version of the repo
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today
5. cd into your repo
6. open the terminal in your vs code and type `npm install`
7. next type `npm run test` in your terminal
8. Complete your work making regular commits to main/ master your codegrade score will update each time you make a push.


### Task 2: Minimum Viable Product

Find the file `index.js` and complete the tasks until all of your tests pass.

You may want to use the [World Cup summary data](https://www.foxsports.com/soccer/fifa-world-cup/history) on Fox Sports to check your math as you go.

### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 3: Stretch Goals

After you have completed the requirements, create a new file called `stretch.js` and practice with Array methods more.

See if you can complete one or more of the following challenges:

- [ ] Create a function that takes country initials as a parameter and returns their total number of World Cup appearances.
- [ ] Account for ties in your 'finals' data set
- [ ] Create a function that takes country initials as a parameter and determines how many goals that country has scored in World Cup games since 1930.
- [ ] Use `.map()` to format country names into `<h1>` HTML headers.

## FAQ

**Where is my data?**

Your data lives in a file called `fifa.js`. In order to work with and use your data in the `index.js` file, we used the import function of JavaScript. The first line in your file should be `import { fifaData } from "fifa.js"`, which will save all of the data into an object called fifaData. You can confirm that your data has been imported correctly by running `console.log(fifaData)` in your `index.js` file.

**What about ties?**

In some cases, when the outcome of a game was decided by penalty kicks, the home team and away team will have the same number of goals scored. You can ignore ties for the purpose of these tasks, but you can also look to the "Win conditions" key  and splice out the winning team as a stretch goal. (See example below)

```
Win conditions": "France win on penalties (3 - 4)",
````

## Resources

🤷‍♀️ [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

🤝[Working with JSON in JavaScript](https://www.ma-no.org/en/programming/javascript/working-with-json-in-javascript)

⚽️ [World Cup Summary Data to Check Work](https://www.foxsports.com/soccer/fifa-world-cup/history)

👀 [List of FIFA World Cup finals on Wikipedia](https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals)

## Submission format

Please submit your project via codegrade by following [these instructions](https://bloomtech.notion.site/BloomTech-Git-Flow-Step-by-step-269f68ae3bf64eb689a8328715a179f9) See part 2, submitting an assignment with codegrade
