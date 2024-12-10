let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime

function startTest(){
    //set the test text
    document.getElementById('inputText').value = testText;

    //Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    //Change button text and functionality
    var button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}
function endTest(){
    endTime = new Date().getTime();

    //disable user input
    document.getElementById("userInput").readOnly = true;

    //elapsed time
    var timeElapsed = (endTime - startTime)/1000;
    var userTypeText = document.getElementById('userInput').value;

    //split the text
    var typedWords = userTypeText.split(/\s+/).filter(function(word){
        return word !== "";
    }).length;

    var wpm = 0 

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);

    }
        //display results
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<h2>Typing Test Results</h2>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" + 
    "<P>Words Per Minute (WPM)" + typedWords + "WPM</p>"

    //Resert Button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.oncclick = startTest;
}