var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog')

var postSchema = mongoose.Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	date: String,
	tags: [String]
})

var Post = mongoose.model('Post', postSchema)

module.exports={
	Post: Post
}