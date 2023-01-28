let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let homeCount = 0
let awayCount = 0

function homeTouchdown() {
    homeCount += 6
    homeScoreEl.textContent = homeCount
}

function homeExtraOne() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function homeExtraTwo() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function homeFieldGoal() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function homeSafety() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function awayTouchdown() {
    awayCount += 6
    awayScoreEl.textContent = awayCount
}

function awayExtraOne() {
    awayCount += 1
    awayScoreEl.textContent = awayCount
}

function awayExtraTwo() {
    awayCount += 2
    awayScoreEl.textContent = awayCount
}

function awayFieldGoal() {
    awayCount += 3
    awayScoreEl.textContent = awayCount
}

function awaySafety() {
    awayCount += 2
    awayScoreEl.textContent = awayCount
}

function newGame() {
    if(homeCount > awayCount) {
        alert("You know the Bears arent allowed to win, try again!" )
    }
    else {
    homeScoreEl.textContent = 0
    awayScoreEl.textContent = 0
    homeCount = 0
    awayCount = 0
    }
}
