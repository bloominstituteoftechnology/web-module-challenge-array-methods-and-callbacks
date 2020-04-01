# FIFA Challenge - JavaScript-Foundations

## Advanced JavaScript

## Array Methods and Callbacks

## Objectives

- Array Methods - demonstrate ability to use `.forEach` `.map` `.reduce` `.filter` and describe their use cases
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

### Task 1: Set up Project and Tests

Using VSCode and a Command Line:

1. Fork repo and add TL as collaborator on Github.
2. Clone your fork (not Lambda's repo by mistake!).
3. `cd` into your newly cloned repository.
4. Create a new branch by typing `git checkout -b <firstName-lastName>`.
5. Install dependencies by typing `npm install`.
6. Run tests by typing `npm run test:watch`.
7. Work on your branch, push commits and create PR as usual.

### Task 2: Minimum Viable Product

Find the file `index.js` and complete the tasks until all of your tests pass.

You may want to use the [World Cup summary data](https://www.foxsports.com/soccer/fifa-world-cup/history) on Fox Sports to check your math as you go.

### Task 3: Stretch Goals

After you have completed the requirements, create a new file called `stretch.js` and practice with Array methods more.

See if you can complete one or more of the following challenges:

- [ ] Create a function that takes a country code as a parameter and returns their total number of World Cup appearances.
- [ ] Create a function that takes a country code as a parameter and determines how many goals that country has scored in World Cup games since 1930.
- [ ] Use `.map` to format country names into `<h1>` HTML headers.

## Testing FAQ

![instructions screenshot](assets/instructions.png)

**What are Tests?**

- Lambda School staff members use tests to algorithmically check for required elements in a code file. For example, a test for the question "`console.log()` "hello [name]" using a variable `name` to hold the name" (not a question you will ever be asked, but I digress), might pass **if** your code includes a variable called `name` **and if** that variable was created with `const` **and** **if** `console.log` is called. Additional parameters could require that this code doesn't exceed 2 lines.
- Your tests work similarly, with more complex conditionals for what is considered passing and what is considered failing. These tests and associated error messages are meant to help you by providing informative error messages that are specific to the requirements of your project.
- Read more about testing frameworks [here](https://blog.bitsrc.io/top-javascript-testing-frameworks-in-demand-for-2019-90c76e7777e9) including how testing can be used at scale. Lambda School uses Mocha to test in JavaScript.

**How do I run tests in terminal?**

- Run tests by typing `npm run test:watch`.
- Testing in Terminal can be done in the terminal utility or VS code.

**How do I run tests in my browser?**

- Open `index.html`.
- You should see the following at first with failed tests and error messages.

![failing tests](assets/FailingTests.png)

- Once your code is working, you will see tests passing and can click on tests to view the code which made the test pass.

![passing tests](assets/PassingTests.png)

## Resources

📚 [Examples of .map, .reduce, and .filter](https://itnext.io/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f)

🤷‍♀️ [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

🤝[Working with JSON in JavaScript](https://www.ma-no.org/en/programming/javascript/working-with-json-in-javascript)

⚽️ [World Cup Summary Data to Check Work](https://www.foxsports.com/soccer/fifa-world-cup/history)

👀 [List of FIFA World Cup finals on Wikipedia](https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals)

## Submission Format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge Branch into master (student's Repo). Please don't merge your own pull request.
- [ ] Add your Team Lead as a reviewer on the pull request.
- [ ] Your Team Lead will count the project as complete by merging the branch back into master.
