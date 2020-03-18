# JavaScript-Foundations

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## Advanced JavaScript

## Array Methods and Callbacks

## Objectives

- Array Methods - demonstrate ability to use `.forEach` `.map` `.reduce` `.filter` and describe their use cases 
- Callbacks - demonstrate the proper use a of a callback function by passing a function to another function as a parameter 
  
## Introduction

In this challenge you will work with a dataset summarizing every world cup game since 1930. As web developers, you will work with JSON data often to interact with servers, summarize data, get images to your page, and more. It is crucial that you cultivate a thorough understanding of data structures and methods early in your career.

The data set you are given (`fifa.js`) contains a report for every game played at every stage in the FIFA World Cup tournament since 1930. Each report is an object with many keys, including `Year`,`Stage`, `Stadium`,  `Home Team Name`,`Home Team Goals`, `Away Team Name`, and `Away Team Goals`. There is a plethora of other data in this set as well, but we won't spend time working with it. You can read more about the data [here](https://www.kaggle.com/abecklas/fifa-world-cup) if you are interested!

Your goal today wil be to manipulate the data using array methods and callbacks to create a nicely formatted list of every World Cup winner since 1930.

## Instructions

### Task 1: Set up Project and Tests

Using VSCode and a Command Line:
1. Fork repo and add TL as collaborator on Github.
2. Clone your fork (not Lambda's repo by mistake!).
3. `cd` into your newly cloned repository.
4. Create a new branch by typing `git checkout -b <firstName-lastName>`.
5. Install dependencies by typing npm install.
6. Run tests by typing npm run test:watch.
7. Work on your branch, push commits and create PR as usual.

### Task 2: Minimum Viable Product

Find the file `index.js` and complete the tasks until all of your tests pass.

### Task 3: Stretch Goals

After you have completed the requirements, create a new file called `stretch.js` and practice with Array methods more.

See if you can complete one or more of the following challenges:

- [ ] Summarize how many times each country has won the world cup with `.reduce`
- [ ] Create a function that takes a country code as a parameter and determines how many goals that country has scored in World Cup games since 1930
- [ ] Create a function that takes a country code as a parameter and returns their total number of World Cup appearances
- [ ] Use .map to format country names into `<h1>` HTML headers


## Testing FAQ

<img alt='instructions screenshot' src='./instructions.png'>

**What are Tests?**

- Lambda School staff members use tests to algorithmically check for required elements in a code file. For example, a test for the question "`console.log()` "hello [name]" using a variable `name` to hold the name" (not a question you will ever be asked, but I digress), might pass **if** your code includes a variable called `name` **and if** that variable was created with `const` **and** **if** `console.log` is called. Additional parameters could require that this code doesn't exceed 2 lines.
- Your tests work similarly, with more complex conditionals for what is considered passing and what is considered failing. These tests and associated error messages are meant to help you by providing informative error messages that are specific to the requirements of your project.
- Read more about testing frameworks [here](https://blog.bitsrc.io/top-javascript-testing-frameworks-in-demand-for-2019-90c76e7777e9) including how testing can be used at scale. Lambda School uses Mocha to test in JavaScript.

**How do I run tests in terminal?**

- Run tests by typing `npm run test:watch`.
- Testing in Terminal can be done in the terminal utility or VS code

**How do I run tests in my browser?**

- Open `index.html`
- You should see the following at first with failed tests and error messages

<img alt='failing tests' src='./FailingTests.png'> 

- Once your code is working you will see tests passing and can click on tests to view the code which made the test pass.

<img alt='passing tests' src='./PassingTests.png'> 

## Project FAQs

**How **

## Resources

📚 [Examples of .map, .reduce, and .filter](https://itnext.io/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f)

🤷‍♀️ [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

🤝[Working with JSON in JavaScript](https://www.ma-no.org/en/programming/javascript/working-with-json-in-javascript)

👀 [List of FIFA World Cup finals
 on Wikipedia](https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals)
