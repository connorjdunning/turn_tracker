
let turn = 0
let lightSource = document.getElementById("lightInput").value
let wanderingMonster = document.getElementById("monsterInput").value
let rest = document.getElementById("mustRest").value
var msg
var msgReact


function log(text) {
    document.getElementById("log").innerHTML += `@${turn} ${text} <br>`
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

function labelCountdown(string) {
    document.getElementById("countText").innerHTML = string
}

function updateMonsterChk(val) {
    wanderingMonster = val
}

function updateRest(val) {
    rest = val
}

function toggleCountdown() {
    if (document.getElementById("countDownBox").checked) {
        document.getElementById("countHider").style.visibility="visible";
        document.getElementById("countHider").style.position="relative";
    } else {
        document.getElementById("countHider").style.visibility="hidden";
        document.getElementById("countHider").style.position="fixed";
    }
}

function everyTurn() {
    // Check light
    if (turn % lightSource == 0) {
        msg = `Check Light Source`
        alert(msg)
        log(msg)
    }
    // Check Wandering Monsters
    if (turn % wanderingMonster == 0) {
        oneDsix = Math.floor(Math.random() * 6) + 1
        chance = document.getElementById("monsterChance").value


        if (oneDsix <= chance) {
            msg =
            `1d6 roll was a ${oneDsix} 
            WANDERING MONSTER APPEARS
            `

            // Reaction roll
            twoDsix = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
            reaction = twoDsix + parseInt(document.getElementById("reactionMod").value)
            // What is scope, baby dont hurt, dont hurt me——no more!

            if (reaction <= 2) { msg += `Reaction: Immediate Attack`; }
            else if (reaction <= 5) { msg += `Reaction: Hostile, possible attack`; }
            else if (reaction <= 8) { msg += `Uncertain, monster confused`; }
            else if (reaction <= 11) { msg += `No attack, monster leaves or considers offers`; }
            else if (reaction >= 12) { msg += `Enthusiastic friendship` }

            alert(msg)
            log(msg)
        }

    }
    // Check if party needs to rest
    if (turn % rest == 0) {
        msg = `The party must rest for 1 turn`
        alert(msg)
        log(msg)
    }
    // Decrement countdown
    if (document.getElementById("countDownBox").checked) {
        count = parseInt(document.getElementById("countDown").value)
        count--
        document.getElementById("countDown").value = count    
    }
    
}