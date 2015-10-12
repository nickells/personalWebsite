app.controller('NavCtrl', function($scope,navService,$document,$state){
	$scope.activePageObj = navService;

	$scope.nav = [
		{name: 'about', displayName: 'About'},
		{name: 'projects', displayName: 'Projects'},
		{name: 'blog', displayName: 'Blog'},
		{name: 'resume', displayName: 'Résumé'}
	]

	//use brackets or J/K to navigate
	$document.bind('keypress', function(e) {
		if (e.charCode === 93 || e.charCode === 107){
			goToNextPage()
		}
		else if (e.charCode === 91 || e.charCode === 106){
			goToPreviousPage()
		}

   });

	//keyboard nav helper functions
	var navTable = $scope.nav.map(function(elem){
		return elem.name
	})

	var goToNextPage = function(){
		var currentIdx= navTable.indexOf(navService.active)
		if (navTable[currentIdx+1]) $state.go(navTable[currentIdx+1])
		else $state.go(navTable[0])
	}

	var goToPreviousPage = function(){
		var currentIdx= navTable.indexOf(navService.active)
		if (navTable[currentIdx-1]) $state.go(navTable[currentIdx-1])
		else $state.go(navTable[navTable.length-1])
	}


})

app.service('navService', function(){
	var service = {};

	service.active;

	//function used in state onEnter to set the navbar
	service.setActive = function(tab){
		service.active = tab;
	}

	return service
})
