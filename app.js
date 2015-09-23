var app = angular.module('Website', [])

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
		templateUrl: 'projectDirective.html',
	}

})