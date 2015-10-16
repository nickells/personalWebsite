var express = require('express')
var app = express();
var blog = require('./db.js')
var bodyParser = require('body-parser')


app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/blog', function(req,res){
	blog.Post.create(req.body)
	.then(function(post){
		post.date = Date.now()
		post.save()
		return post
	})
	.then(function(post){
		res.send('post saved' + post)
	})
})

app.get('/api/blog', function(req,res){
	blog.Post.find()
	.then(function(posts){
		res.json(posts)
	})
})

app.get('/api/blog/:webTitle',function(req,res){
	blog.Post.find({webTitle: req.params.webTitle})
	.then(function(post){
		res.json(post)
	})
})

app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.all('/*', function(req,res){
	res.sendFile(__dirname + '/public/index.html')
})


app.listen(process.env.PORT || 3000)