

let turn = 0
let lightSource = document.getElementById("lightInput").value
let wanderingMonster = document.getElementById("monsterInput").value
let rest = document.getElementById("mustRest").value


function log(text) {
    document.getElementById("log").innerHTML += `@Turn:${turn} ${text} <br>`
}

function updateTurn(val, justNext) {
    // To just increment
    if (justNext) {
        turn++
        document.getElementById("turnText").innerHTML = turn
        everyTurn()
        // Don't continue
        return
    }
    // Change turn via options
    turn = val
    document.getElementById("turnText").innerHTML = turn
    everyTurn()
}

function updateLightChk(val) {
    lightSource = val

}

function updateMonsterChk(val) {
    wanderingMonster = val
}

function updateRest(val) {
    rest = val
}

function everyTurn() {
    // Check light
    if (turn % lightSource == 0) {
        alert("Check Light Source")
        log("Light Source Checked")
    }
    // Check Wandering Monsters
    if (turn % wanderingMonster == 0) {
        oneDsix = Math.floor(Math.random() * 6) + 1;
        chance = document.getElementById("monsterChance").value
        if (oneDsix <= chance) {
            alert("1d6 roll was a " + oneDsix + "\nWANDERING MONSTER APPEARS")
            log("1d6 roll was a " + oneDsix + "\nWANDERING MONSTER APPEARS")
        }
    // Check if party needs to rest
    if (turn % rest == 0) {
        alert("The party must rest for 1 turn")
        log("The party must rest for 1 turn ")
    }


    }
}