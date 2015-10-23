app.config(function($stateProvider){
	$stateProvider.state('projects',{
		url: '/projects',
		templateUrl: 'views/projects.html',
		controller: 'ProjectsCtrl',
		onEnter: function(navService){
		    navService.setActive('projects')
		}
	})
})

app.controller('ProjectsCtrl', function($scope,navService){

	$scope.projects = 
		[{
			name: "blipcrowd",
			displayName: "BlipCrowd",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			name: "dictatone",
			displayName: "Dictatone",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			name: "mementodash",
			displayName: "MementoDash",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			name: "breezeblocks",
			displayName: "Breezeblocks.io",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}]

	$scope.hi = "Greetings!"

})



app.directive('project', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/projectDirective.html',
	}
})