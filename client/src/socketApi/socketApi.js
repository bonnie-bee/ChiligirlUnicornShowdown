import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

//function to emit the event to the server and give back the results of the "timer" event
function chiligirl() {
    //subscribe to timer event before emitting the subscribeToTimer event
    //just in case timer events are emitted from the server but the client hasn't reacted to it yet and events go missing
    // socket.on('chili', timestamp => cb(null, timestamp));
    socket.emit('chiligirl', 3000);
}

export { chiligirl }