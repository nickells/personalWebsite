app.config(function($stateProvider){
	$stateProvider.state('admin',{
		url: '/admin',
		templateUrl: 'views/admin.html',
		controller: 'AdminCtrl'
	})
})


app.controller('AdminCtrl', function($scope,BlogFactory){

	$scope.submit = function(post){
		console.log('submitting')
		return BlogFactory.addPost(post)
	}

	$scope.previewEnabled = false;

	$scope.togglePreview = function(){
		$scope.previewEnabled = !$scope.previewEnabled
	}

})