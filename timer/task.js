function countdown() {
    var timerValue = document.getElementById("timer").innerHTML;

    function updateTimer() {
        if (timerValue === 0) {
            document.getElementById("overlay").style.display = "block";
            clearInterval(timerId);
            return;
        }
        timerValue--;
        document.getElementById("timer").innerHTML = timerValue;
	}

    var timerId = setInterval(updateTimer, 1000);
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

countdown();