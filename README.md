# React-JS-Elementary-chatApplication

A very crude and elementary chat application which uses the React Javascript framework and notable libraries including.

  socket.io-client,
  nodemon,
  express,
  socket.io,
  cors

# Pre-requesites

https://nodejs.org/en/download -> download Node.JS

then press windows key and search for advanced system settings 
this will open a window, navigate to the environment vars button
then select path
click the edit button 
then select a cell and ensure "C:\Users\PC\AppData\Roaming\npm" is entered

# How to install

open up git bash

cd desktop 
git clone https://github.com/gurungpriyan001-rgb/React-JS-Elementary-chatApplication.git

this will ensure that the repository is downloaded to your desktop.

then open up command prompt

cd C:\Users\PC\Desktop\React-JS-Elementary-chatApplication\chatapp
npm install

# How to set up

open up two command prompt windows
in one window enter this

cd C:\Users\PC\Desktop\React-JS-Elementary-chatApplication\chatapp
npm run dev

in the next window enter this

cd C:\Users\PC\Desktop\React-JS-Elementary-chatApplication\server
npm run dev

in your first window you will be greeted with 

"
> chatapp@0.0.0 dev
> vite


  VITE v8.1.5  ready in 413 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  "

 open two browser tabs in your browser and enter "http://localhost:5173/" in the url for both.
 
# Expected results

enter a room number, eg 1, and join for both browsers
then send a message and this message will be displayed on both browsers
