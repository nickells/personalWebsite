app.config(function($stateProvider){
	$stateProvider.state('admin',{
		url: '/admin',
		templateUrl: 'views/admin.html'
	})
	$stateProvider.state('admin.newPost',{
		url: '/new',
		parent: 'admin',
		templateUrl: 'views/admin.add-post.html',
		controller: 'AddPostCtrl'
	})
	$stateProvider.state('admin.allPosts', {
		url: '/all',
		templateUrl: 'views/admin.all-posts.html',
		controller: 'AllPostsCtrl',
		resolve: {
			BlogPosts: function(BlogFactory){
				return BlogFactory.getBlogPosts
			}
		}
	})
})


app.controller('AllPostsCtrl', function($scope, BlogPosts){
	$scope.posts = BlogPosts
})

app.controller('AddPostCtrl', function($scope,BlogFactory){
	$scope.submit = function(post){
		console.log('submitting')
		return BlogFactory.addPost(post)
	}

	$scope.previewEnabled = false;

	$scope.togglePreview = function(){
		$scope.previewEnabled = !$scope.previewEnabled
	}

})