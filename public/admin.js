app.config(function($stateProvider){
	$stateProvider.state('admin',{
		url: '/admin',
		abstract: true,
		templateUrl: 'views/admin.html',
		//redirects to allPosts state
		// controller: function($state){
		// 	$state.go('admin.allPosts')
		// }
		//comment
	})
	$stateProvider.state('admin.newPost',{
		url: '',
		templateUrl: 'views/admin.add-post.html',
		controller: 'AddPostCtrl',
		onEnter: function(navService){
			console.log('hello!')
			navService.setActive('newPost')
		}
	})
	$stateProvider.state('admin.allPosts', {
		url: '^/admin/all',
		templateUrl: 'views/admin.all-posts.html',
		controller: 'AllPostsCtrl',
		resolve: {
			BlogPosts: function(BlogFactory){
				return BlogFactory.getBlogPosts
			}
		}
	})
})


app.controller('AllPostsCtrl', function($scope, BlogPosts,BlogFactory){
	$scope.posts = BlogPosts

	$scope.delete = function(post){
		$scope.posts.splice($scope.posts.indexOf(post),1)
		return BlogFactory.deletePost(post)
	}
	$scope.doNotDelete = function(post){
		post.confirmDelete = false;
	}

	$scope.askDelete = function(post){
		post.confirmDelete = true;
	}
})

app.controller('AddPostCtrl', function($scope,BlogFactory,$state){
	$scope.submit = function(post){
		console.log('submitting')
		return BlogFactory.addPost(post)
		.then(function(post){
			console.log(post)
			$state.go('blogPost', {webTitle: post.webTitle})
		})
	}

	$scope.previewEnabled = false;

	$scope.togglePreview = function(){
		$scope.previewEnabled = !$scope.previewEnabled
	}

})

app.run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);
