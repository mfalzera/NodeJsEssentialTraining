var fs = require('fs');
// fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
//     console.log(`File Read ${chatlog.length}`);
// });

// console.log("reading file...");

var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";

stream.once("data", function() {
    console.log("\n\n");
    console.log("Started Reading File..");
    console.log("\n\n");
})

stream.on("data", function(chunk) {
    process.stdout.write(`Chunk: ${chunk.length} | `);
    data += chunk;
});

stream.on("end", function() {
    console.log("\n\n");
    console.log(`Finished ${data.length}`);
    console.log("\n\n");
})