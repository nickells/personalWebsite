var app = angular.module('Website', ["ui.router", "hc.marked"])
app.config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({gfm: true});
    }])


app.config(function($stateProvider){
	$stateProvider.state('projects',{
		url: '/',
		templateUrl: 'views/projects.html',
		controller: 'MainCtrl'
	})
})

app.controller('MainCtrl', function($scope){
	$scope.projects = 
		[{
			name: "blipcrowd",
			displayName: "BlipCrowd",
			description: "i made this"
		}, {
			name: "dictatone",
			displayName: "Dictatone",
			description: "another thing i made"
		}, {
			name: "mementodash",
			displayName: "MementoDash",
			description: "another thing i made!!"
		}, {
			name: "breezeblocks",
			displayName: "Breezeblocks.io",
			description: "Web application with a drag and drop graphical user interface for quickly prototyping multipage native mobile applications. "
		}]

	$scope.hi = "Greetings!"

})


app.directive('project', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/projectDirective.html',
	}
})
