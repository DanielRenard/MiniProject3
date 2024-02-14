# Mini-Project 3

## Description

The purpose of the Mini Project is to reinforce skills that have been covered in recent modules.

We covered connecting your Express server to a database in Module 9. Now it's time to connect your front end to your server!

The goal here is a working full stack application that allows users to sign up/log in, and then interact and work with your application with all of the CRUD operations. (MVP = CRUD)

## MVC Structure

This is my simple nodejs application to showcase MVC structure and simple Rest API.

After installing, run the server using

npm start
If instead, you get something like the following, someone is already using the default port of 8085:

Server running at http://127.0.0.1:8085/

events.js:72
    throw er; // Unhandled 'error' event
              ^
Error: listen EADDRINUSE
    at errnoException (net.js:901:11)
    at Server._listen2 (net.js:1039:14)
    at listen (net.js:1061:10)
    at Server.listen (net.js:1127:5)
    ...
Once the server is running, test it by visiting the following URL in your browser:

http://localhost:8085/

## files in this repository

server.js

The server written with node.js. This server was adapted from the example provided in the node docs.

.gitignore

List of file patterns that should NOT be stored in git. If you aren't using git, you don't need this file. And the contents are personal preference.

See the npm google groups topic 'node_modules in git' from FAQ for discussion.

package.json

Standard package.json file for node packages. You will need this file for two reasons:

identify your node package dependencies during npm install
identify to Bluemix that this directory contains a node.js application
See the npm doc package.json for more information.

README.md

This file!