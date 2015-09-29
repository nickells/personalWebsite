app.config(function($stateProvider,$locationProvider){
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});


	$stateProvider.state('resume',{
		url: '/resume',
		templateUrl: 'views/resume.html'
	})
})