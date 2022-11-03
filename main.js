window.onload = function () {
    let seconds = 00
    let tens = 00
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let buttonStart = document.getElementById("button-start")
    let buttonStop = document.getElementById("button-stop")
    let buttonReset = document.getElementById("button-reset")
    let buttonLap = document.getElementById("button-lap")
    let Interval

    if(window.onload) {
        document.getElementById("lapContainer").style.display = "none"
    }


    buttonStart.onclick = function () {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }
    buttonStop.onclick = function () {
        clearInterval(Interval)
    }
    buttonReset.onclick = function () {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
        if (document.getElementById("laps") != null) {
            document.getElementById("laps").innerHTML = ""
        }
        document.getElementById("lapContainer").style.display = "none"

    }

    buttonLap.onclick = function () {
        let lap = document.createElement("li")
        lap.innerHTML = appendSeconds.innerHTML + ":" + appendTens.innerHTML
        document.getElementById("laps").appendChild(lap)
        if (tens == "00" && seconds == "00") {
            document.getElementById("laps").innerHTML = ""
        }

        document.getElementById("lapContainer").style.display = "flex"


    if(tens == "00" && seconds == "00") {
        document.getElementById("lapContainer").style.display = "none"
    }
    

    }

    function startTimer() {
        tens++
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens
        }
        if (tens > 99) {
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
    }

}