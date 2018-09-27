'use strict';

//require modules
const five = require('johnny-five');
const board = new five.Board({ port: "COM5" });
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let led = null;

//setting up our page on the browser
//serves local files on the 3000 port
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

//code for the arduino
//starts once the board is connected and ready
//like document.ready
board.on('ready', function() {
  console.log('Arduino is ready.');

  // Initial state for the LED light
  let state = {
    red: 1, green: 1, blue: 1
  };

  // Map pins to digital inputs on the board (pwm inputs)
  led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  // Helper function to set the colors
  let setStateColor = function(state) {
    led.color({
      red: state.red,
      blue: state.blue,
      green: state.green
    });
};

  // Listen to the web socket connection
  io.on('connection', function(client) {
    client.on('join', function(handshake) {
      console.log(handshake);
    });

    // Set initial state
    setStateColor(state);

  // Every time a 'rgb' event is sent, listen to it and grab its new values for each individual colour that was sent in the event
  //if there is a data.value change for a color then use that otherwise use state.red
  //'rgb' is the event name and can be anything we want
    client.on('rgb', function(data) {
      state.red = data.color === 'red' ? data.value : state.red;
      state.green = data.color === 'green' ? data.value : state.green;
      state.blue = data.color === 'blue' ? data.value : state.blue;

      // Set the new colors
      setStateColor(state);

      client.emit('rgb', data);
      client.broadcast.emit('rgb', data);
    });

    // Turn on the RGB LED
    led.on();
  });
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);