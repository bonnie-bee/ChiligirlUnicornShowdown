const five = require('johnny-five');
const board = new five.Board({ port: "COM5" });
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

board.on('ready', function () {
  console.log('Arduino is ready.');

  const led = new five.Led(13);
  const rgb = new five.Led.RGB([6, 5, 3]);
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
      led.blink(500);
      setTimeout(function () {
        led.off();
        console.log('timer')
      }, 7000)
    });

    client.on('unicorn', function (data) {
      console.log(data);
      board.loop(500, function (endLoop) {
        rgb.color(rainbow[index++]);
        stopSwitch++;
        if (index === rainbow.length) {
          index=0;
        }
        if (stopSwitch === 14){
          endLoop();
          rgb.off();
          stopSwitch = 0
        }
      });
    }) 
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
