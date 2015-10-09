app.config(function($stateProvider){
	$stateProvider.state('about',{
		url: '/about',
		template: 'nothing here yet',
		onEnter: function(navService){
		    navService.setActive('about')
		}
	})
})