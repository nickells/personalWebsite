app.config(function($stateProvider){
	$stateProvider.state('admin',{
		url: '/admin',
		templateUrl: 'views/admin.html',
		
		//redirects to allPosts state
		// controller: function($state){
		// 	$state.go('admin.allPosts')
		// }
		//comment
	})
	$stateProvider.state('admin.newPost',{
		url: '/new',
		parent: 'admin',
		templateUrl: 'views/admin.add-post.html',
		controller: 'AddPostCtrl',
		onEnter: function(navService){
			navService.setActive('newPost')
		}
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

app.directive('deleteButton', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/deleteButton.html',
		link: function(elem){
			$('.deleter').on('click', function(){
			  $(this).slideUp()
			});

			$('.confirm-button.N').on('click', function(){
			  $('.deleter').slideDown()
			})
		}
	}

})