var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/blog')

var postSchema = mongoose.Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	date: String,
	tags: [String],
	webTitle: String
})

var Post = mongoose.model('Post', postSchema)

postSchema.pre('save', function(next){
	this.webTitle = this.title.replace(/\s/g,'_')
	next()

	// unique names version
	
	// var doc = this;
	// Post.find().exec().then(function(posts){
	// 	var zero = posts.length > 9 ? '' : 0
	// 	doc.webTitle = zero + posts.length+'_'+doc.title.replace(/\s/,'_')
	// next()
	// })

})

module.exports={
	Post: Post
}