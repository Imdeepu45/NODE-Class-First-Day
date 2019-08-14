var EventEmitter = require('events');

var emitter=new EventEmitter();

emitter.on("dooropen",()=>{
    console.log("rin ring...");
})

emitter.emit("dooropen");