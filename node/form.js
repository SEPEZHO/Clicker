var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

var form = () =>{

console.log('Hello World!');
app.post('/index', urlencodedParser, (req, res) => {
console.log('Hello World From Post!: ' + req.body);
    if (!req.body) return res.sendStatus(400)
    if (req.body.check === undefined) req.body.check = 'off'
    res.render('html/index', {
        data: req.body
    });
});

}

module.exports = form;