function gameObject (){
    const object = {
        home : {
            teamName : "Brooklyn Nets",
            colors : ["Black", "White"],
            players : 
                {
                "Alan Anderson" : {                  // Player 1
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1
                    },
                "Reggie Evans" : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks : 7
                    },                
                "Brook Lopez" : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 15
                    },
                "Mason Plumlee" : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunks : 5
                    },
                "Jason Terry" : {
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    slamDunks : 1
                    }                                                
                }
            },
        away : {
            teamName : "Charlotte Hornets",
            colors : ["Turquoise", "Purple"],
            players : 
                {
                "Jeff Adrien" : {                  
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2
                    },
                "Bismak Biyombo" : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10
                    },                
                "DeSagna Diop" : {
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5,
                    slamDunks : 5
                    },
                "Ben Gordon" : {
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2,
                    steals : 1,
                    blocks : 1,
                    slamDunks : 0
                    },
                "Brendan Haywood" : {
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    slamDunks : 12
                    }                                                
                }
            }
        }

    return object
}

// creates global game object table
const objectBallGameObject = gameObject()

// created my own function to have all of the players listed as a single object list
function playerList(){
    const allPlayerList = {...objectBallGameObject.home.players, ...objectBallGameObject.away.players};
    return allPlayerList
}

// function to return points made by "name" of player using playerList
const numPointsScored = name => playerList()[name].points

// function to return points made by "name" of player using playerList
const shoeSize = name => playerList()[name].shoe

// Used Ternary operator to return teamColors
const teamColors = tName => objectBallGameObject.home.teamName === tName 
    ? objectBallGameObject.home.colors 
    : objectBallGameObject.away.colors;

// teamName function, which returns 2 element array with teamnames
const teamName = () => [objectBallGameObject.home.teamName, objectBallGameObject.away.teamName]

// returns the team's jersey number. Used ternary operator
function playerNumbers(tName){
    const location = tName === 'Brooklyn Nets' 
        ? 'home'
        : 'away' 

    pNumJersay = []
    
    for (const key in objectBallGameObject[location].players){
        pNumJersay.push(objectBallGameObject[location].players[key].number)
    }
    return pNumJersay;
}

// this is simple. I already have a function that creates playlist table. 
// create function that pulls stats for a single player
const playerStats = name => playerList()[name]

// wanted to create a function that returns the max stat of whatever is requested
// return value is the name of the player? (or should i do an array with name and score?)
function maxStat(stat, customTable = false){
    // if (customTable !== undefined){const pList = playerList()}
    
    const pList = customTable === false
        ? playerList()
        : customTable
        
    let highestScoreValue;
    let highestScoreKey;
    
    for (key in pList){
        if (highestScoreKey === undefined || highestScoreValue < pList[key][stat]){
            highestScoreValue = pList[key][stat]
            highestScoreKey = key
        }
    }
    return highestScoreKey
}

// call on playlist, access the player name with the maxStat (shoe property) and then access his (rebound property)
const bigShoeRebounds = () => playerList()[maxStat("shoe")]["rebounds"]

// provide the player name with the maxStat (points property) 
const mostPointsScored = () => maxStat("points")

// provides winning team name
function winningTeam(){
    let home = 0;
    let away = 0;

    for (player in objectBallGameObject.home.players){
        home += objectBallGameObject.home.players[player].points
    }
    for (player in objectBallGameObject.away.players){
        away += objectBallGameObject.away.players[player].points
    }
    
    return home > away ? objectBallGameObject.home.teamName : objectBallGameObject.away.teamName
}

function justPlayerName(){
    const pList = playerList()
    const newPList = {}
    for (key in pList){
        newPList[key] = {"name length" : key.length -1}
    }    
    return newPList
}

// function playerWithLongestName(){
//     return maxStat("name length", justPlayerName())
// }

// using matStat and creating a custom table, this function was easy to do
const playerWithLongestName = () => maxStat("name length", justPlayerName())

const doesLongNameStealATon = () => (longName = playerWithLongestName()) === (maxStealPlayer = maxStat("steals")) ? true : false


console.log(doesLongNameStealATon())

// console.log(playerWithLongestName()("name length", justPlayerName()))     praticing higher order functions

// console.table(objectBallGameObject)
// console.table(justPlayerName())
// console.table(playerList())
// console.log(playerStats("Alan Anderson"))
// console.log(playerNumbers('Brooklyn Nets'))
// console log debug tests
// console.log(teamName())
// console.log(objectBallGameObject.home.teamName)
// console.table(objectBallGameObject)
// console.log(teamColors("Charlotte Hornets"))
// console.log(numPointsScored("Alan Anderson"))
// console.log(shoeSize("Reggie Evans"))
// console.log(teamColors("Brooklyn Nets"))



// below are draft code, notes, thoughts

// function teamColors(tName){
//     if (objectBallGameObject.home.teamName === tName){
//         return objectBallGameObject.home.colors
//     } else {
//         return objectBallGameObject.home.colors
//     }
// }

// IMPORTANT: THIS WONT WORK. UNLIKE THE TEAM PLAY NAMES, THESE KEYS AREN"T UNIQUE AND
// I WAS OVERWRITING THEM
// created my own function to have team name and colors as a single list (remove home / away)
// function topLevelData(gObj){
//     const tLD = {...gObj.home, ...gObj.away}
//     // const tLD = {};

//     for (const key in tLD){
//         // console.log((typeof key))
//         console.log(key)
//         // if (key === 'players'){
//         //     console.log("players ran " + key)
//         // } else {
//         //     console.log(key + " " + gObj[key])
//         //     tLD[key] = gObj[key]
//         // }
//     }
//     // const tLD = Object.assign({}, gObj.home, gObj.away)
//     return tLD
// }

// function teamName(){
//     const teamNameList =[objectBallGameObject.home.teamName, objectBallGameObject.away.teamName]
//     return teamNameList
// }

    // if (tName === 'Brooklyn Nets'){
    //     location = 'home'
    // } else {
    //     location = 'away'
    // }

    // iteration function to see stat that has the max
// function takes in 1 parament: player stat to loop through
// for player in playList
//      if player[stat] > currently stored : currently stored = player[stat]

        // const currentMaxStat = {}
        // if (Object.keys(currentMaxStat).length === 0){
        //     currentMaxStat[key] = pList[key][stat]
        //     highestScoreKey = key

        // } else if (currentMaxStat[highestScoreKey] < pList[key][stat]){
        //     currentMaxStat[key] = pList[key][stat]
        //     delete currentMaxStat[highestScoreKey]
        //     highestScoreKey = key
        // }
        // else if (highestScoreValue < pList[key][stat]){
        //     highestScoreValue = pList[key][stat]
        //     highestScoreKey = key
        // }

// function doesLongNameStealATon() {
//     // const longName = playerWithLongestName()
//     // const maxStealPlayer = maxStat("steals")
//     return (longName = playerWithLongestName()) === (maxStealPlayer = maxStat("steals")) ? true : false
// }