

//(a) Home Team name for 2014 world cup final

// const final2014 = fifaData.filter(item => item.Year === 2014 && item.Stage === "Final")
// console.log(final2014[0]["Home Team Name"])


// ~~~

// const finals2014 = fifaData.filter(function(item){
//     return item.Year === 2014 && item.Stage ==='Final';
// })
// console.log(finals2014[0]['Home Team Name']);



const fifaData = [
   {
    "Year": 2014,
    "Datetime": "13 Jul 2014 - 16:00",
    "Stage": "Final",
    "Stadium": "Estadio do Maracana",
    "City": "Rio De Janeiro",
    "Home Team Name": "Germany",
    "Home Team Goals": 1,
    "Away Team Goals": 0,
    "Away Team Name": "Argentina",
    "Win conditions": "Germany win after extra time",
    "Attendance": 74738,
    "RoundID": 255959,
    "MatchID": 300186501,
  },
  {
    "Year": 2014,
    "Datetime": "28 Jun 2014 - 17:00",
    "Stage": "Round of 16",
    "Stadium": "Estadio do Maracana",
    "City": "Rio De Janeiro",
    "Home Team Name": "Colombia",
    "Home Team Goals": 2,
    "Away Team Goals": 0,
    "Away Team Name": "Uruguay",
    "Win conditions": "",
    "Attendance": 73804,
    "RoundID": 255951,
    "MatchID": 300186491,
  },
];


//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// if you are 40, like jazz, what is your name?


// const final2014 = fifaData.filter(item => item.Year === 2014 && item.Stage === "Final")
// console.log(final2014[0]["Home Team Name"])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// FILTER JSON

// This creates a new object in a list, so the object index is 0.
// if anything pops out of the arrow function as true, then that object will be created.
// then you just use notation to specify what you want to select in your new filtered object/array
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const people = [
        {
        "name": "Jack",
        age: 32,
    },
    {
        "name": "Bob",
        "age": 40,
        "nickname": "Bobino",
        "music": "Jazz",
    },
];

const bobsName = people.filter(item => item.music === "Jazz" && item.age === 40)
console.log(bobsName[0]["name"]);

// @@@@@@@@@@@@@@@@@@@@@@@ save above @@@@@@@@@@@@@@@@@@@@


// ~~~ REGULAN KEY VALUE PAIRS BELOW ~~~~~~~~
// notice the differences in the console.log

// const people1 = [
//             {
//         name: "Jack",
//         age: 32,
//     },
//     {
//         name: "Bob",
//         age: 40,
//         nickname: "Bobino",
//         music: "Jazz",
//     },
// ];
// const bobsName1 = people1.filter(item => item.music === "Jazz" && item.age === 40)
// console.log(bobsName1[0].name);






