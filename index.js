const http = require("http");
const host = 'localhost';
const express = require('express');
var bcrypt = require('bcryptjs');
const serveur = express();
serveur.use(express.urlencoded({ extended: true }));
serveur.use(express.json());
serveur.use(express.raw());
const port = 3000;

require('dotenv').config();
require('./routes/user/user')(serveur, bcrypt);
require('./routes/todos/todos')(serveur, bcrypt);
require('./routes/auth/auth')(serveur, bcrypt);

serveur.listen(port, host, () => {
    console.log(`Serveur is running on http://${host}:${port}`);
});
