var fs = require('fs');
// fs.renameSync("./assets/logs", "./logs");
// console.log("success");

// fs.rmdir("./assets", function(err) {
//     if (err) throw err;
    
//     console.log("Removed");

// });

fs.readdirSync("./logs").forEach(function(fileName) {
    fs.unlinkSync("./logs/" + fileName);
});
fs.rmdir("./logs", function(err) {
    if (err) throw err;
    console.log("Removed");
});