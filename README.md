# LibraryDatabaseManagement

## About

Project has **CRUD** operations for the basic flow of management system.
It also handles the complex calls for organising and maintaining the issue and return, books' count.
An admin is assinged to meet all the requests from the users regarding any query.
A certain time is fixed for the usage of a book for each user and further it has authentication system for both the admin and a user.
So the project was all about the implementation of learnt skills and scaling the complex systems to a smaller complex version. 
 master

## How to Install :

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/AbhishekTiwari07/Notebook
    $ cd Notebook
    $ npm install

## Configure app
- Put MongoURI inside config/keys.js
  module.exports = {
    MongoURI : "Add mongoDB URI"
  }
  
## Start 
    $ npm start

and visit http://localhost:3000/ 
and Admin Registration @ http://localhost:3000/html/AdminRegistration


## Tech Stack

<details>
	<summary>Backend</summary>
		<ul>
			<li>NodeJS</li>
			<li>ExpressJS</li>
			<li>REST API</li>
		</ul>
</details>

<details>
	<summary>Database</summary>
		<ul>
			<li>MySQL</li>
			<li>ORM: sequelizeli>
		</ul>
</details>

<details>
	<summary>Frontend</summary>
		<ul>
			<li>HTML</li>
			<li>Bootstrap</li>
			<li>Javascript</li>
   <li>AnimeJS</li>
		</ul>
</details>



Team:
- [Abhishek Tiwari](https://github.com/AbhishekTiwari07) - Back-End/Database
- [Yogi Valecha](https://github.com/yogivalecha9898) - Front-End
 master
