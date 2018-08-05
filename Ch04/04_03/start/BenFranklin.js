var EventEmitter = require('events').EventEmitter;
var util = require('util');
// var emitter = new events.EventEmitter();

var Person = function(name) {
    this.name = name;
};

// this is the way javascript handles inheritance.
util.inherits(Person, EventEmitter);
var ben = new Person("Ben Franklin");
ben.on('speak', function(said) {
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "Huh?");

// emitter.on('customEvent', function(message, status) {
//     console.log(`${status}: ${message}`);
// });

// emitter.emit('customEvent', "Hello world", 200);