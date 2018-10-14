const five = require('johnny-five');
const boards = new five.Boards([{ port: "COM5", id: "A" }, { port: "COM6", id: "B" }]);
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

boards.on('ready', function () {
  console.log('Arduino is ready.');
  let board1 = this.byId("A");
  let board2 = this.byId("B");
  const led1 = new five.Led({
    pin: 13,
    board: this.byId("B")
  });
  const led2 = new five.Led({
    pin: 12,
    board: this.byId("B")
  });
  const rgb = new five.Led.RGB({
    pins: [3, 5, 6],
    board: this.byId("B")
  });

  const lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20,
    board: this.byId("A")

    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  let index = 0;
  let stopSwitch = 0;
  const rainbow = ['FF0000', 'FF7F00', 'FFFF00', '00FF00', '0000FF', '4B0082', '8F00FF'];

  // led.on();
  io.on('connection', function (client) {
    client.on('join', function (handshake) {
      console.log(handshake);
    });

    client.on('chiligirl', function (data) {
      console.log(data);
      led1.blink(500);
      setTimeout(function () {
        led2.blink(500)
      }, 500);
      setTimeout(function () {
        led1.stop().off();
        led2.stop().off();
        console.log('timer')
      }, 7000)
    });

    client.on('unicorn', function (data) {
      console.log(data);
      board2.loop(500, function (endLoop) {
        rgb.color(rainbow[index++]);
        stopSwitch++;
        if (index === rainbow.length) {
          index = 0;
        }
        if (stopSwitch === 14) {
          endLoop();
          rgb.off();
          stopSwitch = 0
        }
      });
    });

    client.on('results', function (data) {
      console.log(data[0].amount);
      let chiligirlAmount = data[0].amount;
      console.log(data[1].amount);
      let unicornAmount = data[1].amount;

      // Tell the LCD you will use these characters:
      lcd.useChar("check");
      lcd.useChar("heart");
      lcd.useChar("duck");

      // Line 1: Hi rmurphey & hgstrp!
      lcd.clear().print(`Chiligirls: ${chiligirlAmount}`);
      lcd.cursor(1, 0);
      lcd.print(`Unicorns: ${unicornAmount}`)
      boards.repl.inject({
        lcd: lcd
      });
    });
  });
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});
io.listen(port);
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
