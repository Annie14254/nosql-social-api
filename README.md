# NoSQL Social API
[![License Badge](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contribution](#Contribution)
- [Contact](#Contact)

## Description
This is an application that provides the structure for a social media API. Through an application such as Insomnia Core, users can utilize routes to view, create, update, and delete users and their associated thoughts and reactions.

## Installation
To install the dependencies required for the application, run the following line in the terminal.

```
npm install
```

## Usage
To run locally: 
- Clone the repository to your local computer.
- Install all dependencies by running ```npm install``` or ```npm i``` in the integrated terminal in the root of the repository.
- Run ```node server.js``` in the terminal to start the server. The port will be displayed in the console (default 3001).
- Open Insomnia Core or a similar application and refer to the routes files for appropriate syntax for get/post/put/delete routes.

An example of a valid route would be a route to get all users: 
```
GET http://localhost:(PORT)/user
```

An example of a valid route to create a user, with the JSON shown in the text input for Insomnia:
```
POST http://localhost:(PORT)/user

{
    "username": "Example",
    "email": "example@email.com"
}
```

A video showing the functionality of the application can be found [here](https://drive.google.com/file/d/1oc_7vu65-L3opQcg1Y9m5WxkMCwBruL6/view?usp=sharing).

## Testing
To test the application, run the following line in the terminal.

```
npm test
```

## Contribution
N/A

## Contact
If you have questions, contact the author of the repository, Annie14254, at annieyashley@gmail.com.

