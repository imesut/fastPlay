document.addEventListener('DOMContentLoaded', function () {

    // Speed Slide
    document.getElementById("speedSlide").addEventListener("input", function () {
        val = document.getElementById("speedSlide").value;
        document.getElementById("currentSpeed").innerText = val;
        chrome.tabs.executeScript({ code: getPlayBackRate(val)});
    });

    // Set to Normal by Button
    document.getElementById("setNormal").addEventListener("click", function(){
        val = 1;
        document.getElementById("currentSpeed").innerText = val;
        document.getElementById("special").value = val;
        document.getElementById("speedSlide").value = val;
        chrome.tabs.executeScript({ code: getPlayBackRate(val)});
    });

    // Special Value from Input
    document.getElementById("special").addEventListener("input", function(){
        val = document.getElementById("special").value;
        if (val == "" || val <= 0){
            val = 1;
        }
        document.getElementById("currentSpeed").innerText = val;
        document.getElementById("speedSlide").value = val;
        chrome.tabs.executeScript({ code: getPlayBackRate(val)});
    });

});

function getPlayBackRate(playBackRate) {
    return 'document.getElementsByTagName("video")[0].playbackRate = ' + playBackRate + ';';
}