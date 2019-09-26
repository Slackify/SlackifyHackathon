const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const hbs = require('hbs')
const bodyParser = require("body-parser")


//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


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

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Hey team Slackify! Express app listeing on port ${port}!`))
