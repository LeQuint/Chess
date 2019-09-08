# Notes
NOTE: Currently fixing issue with WebSockets on Google App Engine, game connection isn't working over web. Please visit
<https://github.com/LeQuint/chess-ws/> to set up local WebSocket Server to test out the full functionality of the app.

NOTE: The following content will go over the design and implementation of my chess web app. Check out the site at <https://chess-web-app-109.appspot.com/> <br/>

## Contents
- [Notes](#notes)
- [Intro](#intro)
- [Design](#design)
  * [Game](#game)
  	+ [p5.js](#p5.js)
    + [Game Logic](#game-logic)
    + [WebRTC and WebSockets](#webrtc-and-websockets)

  * [Back-End](#backend)
  	+ [MongoDB and Passport.js](#p5.js)
    + [Express Routing](#game-logic)

  * [Front-End](#frontend)
  * [Deployment](#deployment)

- [Testing and Debugging](#testing-and-debugging)
- [Things I've Learned](#things-i've-learned)


# Intro
The main goal of this project is to get accustomed to the different web technologies and to play around with WebSockets and WebRTC to implement a serverless connection which allows users to send each other data. The different web technologies incorporated in this project are:

-   Node.js & Express for back-end
-	MongoDB & Passport.js for user validation
-   EJS layouts & BootStrap for front-end
-   WebRTC & WebSockets for real-time connection between users
-	p5.js to render graphics and implement game logic
-	Google App Engine for deployment

The front-end template is taken from <https://github.com/BlackrockDigital/startbootstrap-sb-admin-2>. Everything else was built from scratch.


![ScreenShot](./pics/gamePlay.png)


# Design

## Game

### P5.js

### Game Logic

### WebRTC and WebSockets

## Backend

### MongoDB and Passport.js

### Express Routing

## Frontend

## Deployment

# Testing and Debugging

# Things I've Learned
