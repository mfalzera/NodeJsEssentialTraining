var readline = require('readline');
var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var pctWaited = 0;

// console.log("Wait for it...");
function writeWaitingPercent(p) {
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`waiting... ${p}%`);
}

var interval = setInterval(function() {
    currentTime += waitInterval;
    pctWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(pctWaited);
    // console.log(`waiting ${currentTime/1000} seconds.`);
}, waitInterval);

setTimeout(function() {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n...Done");
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercent(pctWaited);