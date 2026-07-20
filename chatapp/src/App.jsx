import { useEffect } from 'react';
import { useState } from 'react'
import io from "socket.io-client"
const socket = io.connect("http://localhost:8000") // must correspond to the port on the server

function App() {

  const [msg, setMsg] = useState("")

  // basically initialises a var called msg
  // then initialises a function called setMsg
  // useState ensures there is a relationship between the two where msg will have its value set to the
  // param entered in setMsg

  const [serverMsg, setServerMsg] = useState("")
  const [room, setRoom] = useState("")

  const sendMessage = () =>{

    socket.emit("send_message", { // sends a message

      message: msg,
      room: room

    })

  }

  // const funcName = () => {} just means a call  back function

  // socket.emit("{enter_message_id_here}", {}) is used to send messages from the client to the server

  const joinRoom = () => {

    if (room !== ""){

      socket.emit("join_room", room)

    }

  }

  //

  useEffect(() => { 
  // essentially use effect just means this code will run when the component first loads
  // and re run if the socket changes

    socket.on("receive_message", data => { // listener for a specific message ID from server

      //socket.on("receive_message", data => {
      //socket.on("receive_message", (data) => {
      // there is a difference when you bracket data, if u dont then YOUR own message will be displayed on both screens too
      // if you DO then your own message will only be displayed on the other client's screen
      // in other words your own changes arent replicated to ur own client and only replicated to the other user

      setServerMsg(data); // and this jsut uses a predefined function from the start to set the message we receive from the server

    });

  }, [socket])

  //[socket] basically tells react to re run the effect above every time the socket var changes
  //if it was null it'd just run the effect when the component loads
  // however since it is socket it will both do this AND re run every time socket var changes

  //

  return (

    <>

      <div>

        <input onChange={(e) => {setRoom(e.target.value)}} type="text" placeholder="room code..."></input>
        <button onClick={joinRoom}>Join Room</button>

        <footer></footer>

        <input onChange={(e) => {setMsg(e.target.value)}} type="text" placeholder="message ..."></input>
        <button onClick={sendMessage}>send message</button>

        {/* important event listeners
        onChange={e => {} }
        onClick={e => {} } 

        e.target.value -- gets the actual value of the text box
        assuming e.target is a reference to the text box
        
        */}

        <h1>{serverMsg ? serverMsg.message : null}</h1> 

        {/* this displays the message from the server */}

      </div>
    
    </>

  )
}

export default App
