const express = require("express")

const app = express()
const http = require("http") // how we connect our sockets

const {Server} = require("socket.io")

const cors = require("cors")

//requires done

app.use(cors())
const server = http.createServer(app)

//creating server done

const io = new Server(server, {
    cors: {
    origin: "http://localhost:5173", // run client to find out what port its running on and enter here
    methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => { // upon receiving a connection, with the socket acting as a user

    // set up the following listeners on the user upon them connecting

    console.log("userconnected")

    socket.on("send_message", (data) =>{ //receiving with unique id of send_message

        socket.to(data.room).emit("receive_message", data)

        console.log(data)

    });

    socket.on("join_room", (data) =>{

        socket.join(data);

        console.log(data)

    });

})

server.listen(8000, () => { // server listening

    console.log("Server started on port 8000")

})

//server functionality done