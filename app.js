const express = require('express');
const socket = require('socket.io');
const app = express();
const chatRoute = require('./Routes/chatRoute');
const port = 4000;
// const ejs = require('ejs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', chatRoute)


app.listen(port, () => {
    console.log("Chat app started at port 4000");
  });

