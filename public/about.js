app.config(function($stateProvider){
	$stateProvider.state('about',{
		url: '/',
		templateUrl: 'views/about.html',
		onEnter: function(navService){
		    navService.setActive('about')
		}
	})
})