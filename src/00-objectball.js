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

// creates game object with data as a global variable
const objectBallGameObject = gameObject()

// created my own function to have all of the players listed as a single object list
function playerList(gObj){
    const allPlayerList = {...gObj.home.players, ...gObj.away.players};
    return allPlayerList
}

// function to return points made by "name" of player using playerList
const numPointsScored = name => playerList(objectBallGameObject)[name].points

// function to return points made by "name" of player using playerList
const shoeSize = name => playerList(objectBallGameObject)[name].shoe

// Used Ternary operator to return teamColors
const teamColors = tName => objectBallGameObject.home.teamName === tName ? objectBallGameObject.home.colors 
    : objectBallGameObject.away.colors;

function teamName(){
    const teamNameList =[objectBallGameObject.home.teamName, objectBallGameObject.away.teamName]
    return teamNameList

}

function playerNumbers(tName){
    let location;
    if (tName === 'Brooklyn Nets'){
        location = 'home'
    } else {
        location = 'away'
    }
    pNumJersay = []
    
    for (const key in objectBallGameObject[location].players){
        pNumJersay.push(objectBallGameObject[location].players[key].number)
    }
    return pNumJersay;
}

console.log(playerNumbers('Brooklyn Nets'))
// console log debug tests
// console.log(teamName())
// console.log(objectBallGameObject.home.teamName)
// console.table(objectBallGameObject)
// console.log(teamColors("Charlotte Hornets"))
console.table(playerList(objectBallGameObject))
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

