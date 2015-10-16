var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/blog')

mongoose.connect('mongodb://heroku_f0zqz7md:p0p76ml457n2ij9gkgh3ogr63s@ds039684.mongolab.com:39684/heroku_f0zqz7md')

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