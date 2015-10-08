app.config(function($stateProvider){
	$stateProvider.state('blog',{
		url: '/blog',
		templateUrl: 'views/blog.html',
		controller: 'BlogCtrl'
	})
})

app.factory('BlogFactory', function($http){
	return{
		getBlogPosts: $http.get('/api/blog')
		.then(function(posts){
			return posts.data
		}),
		addPost: function(body){
			console.log('blogFactory',body)
			return $http.post('/api/blog',body)
		}
	}
})

app.controller('BlogCtrl', function($scope,BlogFactory){
	BlogFactory.getBlogPosts
	.then(function(posts){
		$scope.posts = posts
	})
})


app.directive('blogPost',function(){
	return {
		restrict: 'E',
		templateUrl: 'views/blogPostDirective.html'
	}
})