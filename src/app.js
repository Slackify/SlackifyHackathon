const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const hbs = require('hbs');
const bodyParser = require("body-parser");
const translate = require('moji-translate')
const env = require('dotenv').config();


//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));
//Setup body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('', (req, res) => {
    res.render('index')
});

app.get('/trynow', (req, res) => {
    res.render('try-now', { SlackAuthKey: process.env.SlackAuthKey} )
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/signup', (req, res) => {
    res.render('sign-up')
});

app.get('/emoji/:message', (req, res) => {
    res.send(translate.translate(req.params['message']))

});


app.listen(port, () => console.log(`Hey team Slackify! Express app listeing on port ${port}!`));


