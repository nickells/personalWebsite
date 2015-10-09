var app = angular.module('Website', ["ui.router", "hc.marked"])
app.config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({gfm: true});
    }])


app.config(function($stateProvider){
	$stateProvider.state('projects',{
		url: '/',
		templateUrl: 'views/projects.html',
		controller: 'MainCtrl',
		onEnter: function(navService){
		    navService.setActive('projects')
		}
	})
})

app.controller('MainCtrl', function($scope,navService){

	$scope.projects = 
		[{
			name: "blipcrowd",
			displayName: "BlipCrowd",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		}, {
			name: "dictatone",
			displayName: "Dictatone",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		}, {
			name: "mementodash",
			displayName: "MementoDash",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		}, {
			name: "breezeblocks",
			displayName: "Breezeblocks.io",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		}]

	$scope.hi = "Greetings!"

})



app.directive('project', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/projectDirective.html',
	}
})
