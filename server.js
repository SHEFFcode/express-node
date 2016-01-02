var express = require('express');
var app = express();
var port = 7000;
var middleware = require('./middleware');

//Important to specify middleware up top.
//app.use(middleware.requireAuthenticaiton);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthenticaiton, function (req, res) {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Express server running on port ' + port + ' ...');
});