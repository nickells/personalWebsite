app.controller('NavCtrl', function($scope,navService){
	$scope.activePageObj = navService;

	$scope.nav = [
		{name: 'projects', displayName: 'Projects'},
		{name: 'blog', displayName: 'Blog'},
		{name: 'about', displayName: 'About'},
		{name: 'resume', displayName: 'Résumé'}
	]

})

app.service('navService', function(){
	var service = {};

	service.active;
	service.setActive = function(tab){
		service.active = tab;
	}
	return service
})
