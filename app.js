const express = require('express');
// const socket = require('socket.io');
const app = express();
const chatRoute = require('./Routes/chatRoute');
const port = 4000;
const { Server } = require("socket.io");        //server=variable bc, socket needs variable to listen to 
// const ejs = require('ejs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', chatRoute)     //this code means that whatever is after "/"" add it and display 

const server = app.listen(port, () => {         
  console.log("Chat app started at port 4000");
});

const io = new Server(server);

io.on("connection", (socket) => {   //make them connect when entered the site
  console.log("Connected");
  socket.on("chatMessage", (data) => {           //when someone is connected,  on---> take something{data}, (data)---> data we send
    console.log(data);
    io.emit("getMessages", data);                //emit---> send something for instance   
  });
});

