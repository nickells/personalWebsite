var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog')

var postSchema = mongoose.Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	date: String,
	tags: [String],
	webTitle: String
})

var Post = mongoose.model('Post', postSchema)

postSchema.pre('save', function(next){
	var doc = this;
	Post.find().exec().then(function(posts){
		var zero = posts.length > 9 ? '' : 0
		doc.webTitle = zero + posts.length+'_'+doc.title.replace(/\s/,'_')
		next()
	})
})

module.exports={
	Post: Post
}