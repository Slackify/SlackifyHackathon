const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const hbs = require('hbs');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//Setup MongoDB Atlas
mongoose.connect("mongodb+srv://admin-matlau:NrW1S2zLFzRj6BtB@mattewcylau-5ltcp.mongodb.net/slackifymeDB", {
    useNewUrlParser: true
});

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));
//Setup body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//Setup message schema
const messageSchema = {
    slackChannel: String,
    messageBody: String,
    time: {
        type: Date,
        default: Date.now
    }
}

const Message = mongoose.model(
    "Message", messageSchema
);

app.get('', (req, res) => {

    const message = new Message({
        slackChannel:"xx",
        messageBody:"xx"
    });
    message.save(function (err) {

        if (!err) {
            console.log("Successfully saved new message")
        }
    });

    res.render('index')
});

app.get('/trynow', (req, res) => {
    res.render('try-now')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/signup', (req, res) => {
    res.render('sign-up')
});


app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Hey team Slackify! Express app listeing on port ${port}!`));

