window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementsById("tens");
    var appendSeconds = document.getElementsById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval ;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        interval = setInterval(startTimer, 10);
        }
    
        buttonStop.onclick = function() {
            clearInterval(interval);
        }
    
        buttonReset.onclick = function (){
            clearInterval(interval);
        }

    buttonReset.onclick - function(){
        clearInterval(interval);
        tens = "00";
        seconds="00";
        appendTens.innerHTML = tens;
        appendTens.innerHTML = seconds;
        }
    }    
        