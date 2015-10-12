app.config(function($stateProvider){
	$stateProvider.state('about',{
		url: '/',
		template: 'nothing here yet',
		onEnter: function(navService){
		    navService.setActive('about')
		}
	})
})