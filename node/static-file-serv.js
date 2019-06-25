var form = require ('./form');

form();

var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get('/index(/:id)?', (req, res) => {
    res.render('html/index');
});
app.get('/form', (req, res) => {
    res.render('html/form');
});


app.listen(8080);
app.listen(app.get('port'), function() {
console.log('\n\n-------------------------------------------\n\n'
	+ 'Server started: http://localhost:' + app.get('port') + '/\n\n'
	+ '-------------------------------------------\n\n')
});

