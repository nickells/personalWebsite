app.config(function($stateProvider){
  $stateProvider.state('login',{
    url: '/login',
    templateUrl: 'views/login.state.html',
    controller: 'LogInCtrl'
  })
})

app.controller('LogInCtrl', function($state, AuthFactory,$scope){
    $scope.logIn = function(){
        AuthFactory.logIn($scope.login.password)
        .then(function(){
            $state.go('admin.newPost')
        })
    }
})

app.factory('AuthFactory', function($http){
    var auth = {}

    auth.logIn = function(creds){
        return $http.post('/api/login',{creds: creds})
        .then(function(res){
            return res.data;
        })
    }

    auth.checkAuth = function(){
        return $http.get('/api/login')
        .then(function(res){
            return res.data;
        })
    }

    return auth;
})