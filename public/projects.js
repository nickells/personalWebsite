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
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}, {
			name: "dictatone",
			displayName: "Dictatone",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}, {
			name: "mementodash",
			displayName: "MementoDash",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}, {
			name: "breezeblocks",
			displayName: "Breezeblocks.io",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}]

	$scope.hi = "Greetings!"

})



app.directive('project', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/projectDirective.html',
	}
})