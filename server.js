var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session')

var api = require('./api-routes')

app.use(session({
	secret: process.env.SESSION_SECRET || 'hello',
	resave: false,
	saveUninitialized: true
}))


app.use(function(req,res,next){
	console.log(req.session)
	next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api)


app.use(express.static('public'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))
app.use('/*', function(req,res){
	// console.log('got to slash',req)
	// console.log('dirname', __dirname)
	res.sendFile(__dirname + '/public/index.html')
})


// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});


app.listen(process.env.PORT || 3000)