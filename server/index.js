require ('dotenv').config({path: __dirname + '/../.env'}); 
const express = require('express'); 
const massive = require('massive'); 
const session = require('express-session'); 
const uc = require('./controllers/userController'); 
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env; 

const app = express(); 
app.use(express.json()); 

app.use(
    session({
        secret: SESSION_SECRET, 
        saveUninitialized: true, 
        resave: false
    })
); 

massive(CONNECTION_STRING).then(db => app.set('db', db)); 

//user endpoints
app.post('/api/login', uc.login); 
app.post('/api/signup', uc.signup); 
app.delete('/api/logout', uc.logout); 

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`)); 