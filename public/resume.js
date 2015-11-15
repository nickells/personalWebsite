app.config(function($stateProvider,$locationProvider){
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: true
	});


	$stateProvider.state('resume',{
		url: '/resume',
		templateUrl: 'views/resume.html',
		onEnter: function(navService){
		    navService.setActive('resume')
		}
	})
})