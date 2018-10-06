const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const LocalStrategy = require('passport-local');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then((db)=>{
        console.log('db connected');
        app.set('db', db);
    })

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})