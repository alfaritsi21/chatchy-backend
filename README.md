<h1 align="center">ExpressJS - Chatchy RESTfull API</h1>

A system website app for sending message on a realtime. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name chatchy, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3001/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=localhost // Database Host
DB_ROOT=root // Database Root
DB_PASSWORD= // Password set for database is empty
DB_DATABASE=chatchy // Database
DB_PORT=3001 // PORT
DB_IP=127.0.0.1 // IP
```

## End Point

**1. USER**

- `/user/register`(Register New User)

  - `{ "user_name":"roger", "user_email":"roger@gmail.com", "user_password":"Chatchy21!", "user_phone":"235467"}`

- `/user/login`(Login Account)

  - `{ "user_email":"ijiq@gmail.com", "user_password":"Chatchy21!"}`

- `/user/activation/:id`(Activate Account)

- `/user/:id`(Get User by ID)

- `/user/search/username`(Search user by username)

  - `{ "user_name" : "nezuko" }`

- `/user/search/usernickname`(Search user by nickname)

  - `{ "user_nickname" : "Ade Londok" }`

- `/user/search/userphone`(Search user by phone number)

  - `{ "user_phone" : 0854356 }`

- `/user/:id`(Edit Profile)

  - `{ "user_nickname" : "Djanbi Dumadi", "user_name" : "djanbi12", "user_email" : "djanbi@gmail.com" "user_password" : "Chatchy21!", "user_phone" : 08123713, "user_image" : {upload}, "user_bio" : "Halo Semua"}`

- `/user/password/reset/`(Reset Password)

  - `{ "user_email": "salsa@gmail.com", "user_password" : "Chatchy21!", "re_password": "Chatchy21!" }`

**2. MESSAGE**

- `/message/chat/`(Send a Message)

  - `{ "message_sender": 1, "message_receiver": 2, "message_chat": "Kamu sekarang tinggal dimana ?" }`

- `/message/delete/:id`(Delete a Message)

- `/message/search/`(Send a Message)

  - `{ "message_chat" : "hai", "sender" : 1, "receiver" : 2 }`

- `/message/` (Get data Message)

  - `{ "sender" : 11, "receiver" : 23 }`

**3. CONTACT**

- `/contact/:id`(Get Contact By Owner)

- `/contact/delete`(Delete Contact)

  - `{ "owner" : 15, "saved" : 19 }`

- `/contact/addcontact`(Add Contact)

  - `{ "owner" : 15, "saved" : 19 }`

**Documentation API**

https://documenter.getpostman.com/view/12330489/TVKJxEeR

## License

© [Arqi Alfaritsi](https://github.com/alfaritsi21/)
