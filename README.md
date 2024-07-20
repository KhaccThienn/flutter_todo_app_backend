# Todo App Backend

A nice project with a nice description

---
## Requirements

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

    $ npm --version

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Install

    $ git clone https://github.com/KhaccThienn/flutter_todo_app_backend.git
    $ cd flutter_todo_app_backend
    $ npm install

## Configure app
### Step 1: Copy `.env.example` to `.env`
#### On Windows

Open Command Prompt and navigate to the project directory, then run:

    copy .env.example .env
#### On Ubuntu

Open Terminal and navigate to the project directory, then run:

    cp .env.example .env

### Step 2: Check IPv4 Address

#### On Windows

Open Command Prompt and run:

    ipconfig
Look for the "IPv4 Address" under the network adapter you're using.

#### On Ubuntu

Open Terminal and run:

    hostname -I

The output will show your IPv4 address.

### Step 3: Fill in the `.env` File

Open the `.env` file in a text editor and replace the placeholder values with your actual configuration details.

- Set `APP_HOST` to your IPv4 address (found in Step 2).
- Set `APP_PORT` to your port

### Step 5: Import Database

Ensure you have MySQL installed and running. Then, import the provided SQL file into your MySQL database.

## Running the project

    $ npm start