var questions = [
    "Name?",
    "Hobby?",
    "Language?"

];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
    // process.stdout.write('\n' + data.toString().trim() + '\n');
});

process.on('exit', function() {
    // display the answers...
    process.stdout.write('\n\n');
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`);
    process.stdout.write('\n\n');
});

ask(0);

// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");