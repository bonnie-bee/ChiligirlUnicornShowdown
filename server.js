const five = require('johnny-five');
//two different port settings for different computers
const boards = new five.Boards([{ port: "COM5", id: "A" }, { port: "COM6", id: "B" }]);
// const boards = new five.Boards([{ port: "COM3", id: "A" }, { port: "COM4", id: "B" }]);
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const port = 8081;
const app = express();
const routes = require("./routes");
const server = require('http').createServer(app);
const io = require('socket.io')();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chiliresults");

//connect to the arduino boards
//when they're connected frun this function
boards.on('ready', function () {
  console.log('Arduino is ready.');
  //board1 has the lcd screen
  let board1 = this.byId("A");
  //board 2 has the lights
  let board2 = this.byId("B");
  //the next two lights are red and green blinking for the chili pepper
  const led1 = new five.Led({
    pin: 13,
    board: this.byId("B")
  });
  const led2 = new five.Led({
    pin: 12,
    board: this.byId("B")
  });
  //this is the rainbow RGB led for the unicorn
  const rgb = new five.Led.RGB({
    pins: [3, 5, 6],
    board: this.byId("B")
  });

  //setting up the lcd screen
  const lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20,
    board: this.byId("A")
  });

  //creating the variables to be used in the rainbow loop
  let index = 0;
  let stopSwitch = 0;
  const rainbow = ['FF0000', 'FF7F00', 'FFFF00', '00FF00', '0000FF', '4B0082', '8F00FF'];

  //setting up the web sockets and once connected to start listening for the emit phrases below
  io.on('connection', function (client) {
    //shows the arduino connection
    client.on('join', function (handshake) {
      console.log(handshake);
    });

    //when "chiligirl" is emitted from app.js run this function
    client.on('chiligirl', function (data) {
      console.log(data);
      //blink both lights with one offset so they alternate 
      led1.blink(500);
      setTimeout(function () {
        led2.blink(500)
      }, 500);
      //turn the lights off after 7 seconds when the page changes back to the start screen
      setTimeout(function () {
        led1.stop().off();
        led2.stop().off();
        console.log('timer')
      }, 7000)
    });

    //when "unicorn" is emitted from app.js run this function
    client.on('unicorn', function (data) {
      console.log(data);

      //loop through the rainbow variables I created earlier
      //have to name the callback so I can call it later to end the loop
      //the loop runs every .5 seconds
      board2.loop(500, function (endLoop) {
        stopSwitch++;
        rgb.color(rainbow[index++]);
        //repeat the rainbow
        if (index === rainbow.length) {
          index = 0;
        }
        //end the rainbow after 7 seconds 
        if (stopSwitch === 14) {
          endLoop();
          rgb.off();
          stopSwitch = 0
        }
      });
    });

    //when "results" is emitted from app.js run this function 
    //takes in the currentDay array from state as an argument
    client.on('results', function (data) {

      //grab the data from the array for the corresponding result type
      console.log(data[0].amount);
      let chiligirlAmount = data[0].amount;
      console.log(data[1].amount);
      let unicornAmount = data[1].amount;

      //clear the lcd screen
      //line 1 starts as- Chiligirls: 0
      lcd.clear().print(`Chiligirls: ${chiligirlAmount}`);
      //place the cursor at the start of line two
      lcd.cursor(1, 0);
      //line 2 starts as - Unicorns: 0
      lcd.print(`Unicorns: ${unicornAmount}`)
      boards.repl.inject({
        lcd: lcd
      });
    });

    //run this function when "chilicorn" is emitted from app.js
    client.on('chilicorn', function (data) {
      console.log(data);
      //clear the lcd screen
      //place the cursor on the third square in line 1 
      //prints - "THE ELUSIVE"
      lcd.clear().cursor(0,2).print("THE ELUSIVE")
      //place the cursor on square 4 in line 2
      //prints - "CHILICORN!"
      lcd.cursor(1,3).print("CHILICORN!")
    })
  });
});


// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

//start the web sockets port
//on own port so easy for it to continuously listen for emits
//i think
io.listen(port);
//start the app port
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
