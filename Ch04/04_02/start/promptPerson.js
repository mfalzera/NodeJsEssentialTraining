var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    sayings: []
};

rl.question("Real Person? ", function(answer) {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `)
    // console.log(answer);

    rl.prompt();

    rl.on('line', function(saying) {
        realPerson.sayings.push(saying.trim());
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? (exit to leave) `);
            rl.prompt();
            // console.log(saying.trim());
        }
    });
});

rl.on('close', function() {
    console.log("%s says %j", realPerson.name, realPerson.sayings);
    process.exit();
});