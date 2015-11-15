app.config(function($stateProvider){
	$stateProvider.state('blog',{
		url: '/blog',
		templateUrl: 'views/blog.html',
		controller: 'BlogCtrl',
		onEnter: function(navService){
		    navService.setActive('blog');
		}
	})

	$stateProvider.state('blogPost',{
		url: '/blog/:webTitle',
		onEnter: function(navService){
		    navService.setActive('blog');
		},
		templateUrl: 'views/blog.html',
		controller: function($scope,BlogFactory,$stateParams){
			BlogFactory.getBlogPost($stateParams.webTitle)
			.then(function(post){
				$scope.posts = post;
			})
		}
	})
})

app.factory('BlogFactory', function($http){
	return{
		getBlogPosts: $http.get('/api/blog')
		.then(function(posts){
			return posts.data
		}),
		getBlogPost: function(webTitle){
			return $http.get('/api/blog/'+webTitle)
			.then(function(post){
				return post.data
			})
		},
		addPost: function(body){
			console.log('blogFactory',body)
			return $http.post('/api/blog',body)
			.then(function(post){
				return post.data
			})
		},
		deletePost: function(post){
			return $http.delete('/api/blog/'+post._id)
			.then(function(post){
				return post.data
			})
		}
	}
})

app.controller('BlogCtrl', function($scope,BlogFactory,navService){
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