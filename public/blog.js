app.config(function($stateProvider){
	$stateProvider.state('blog',{
		url: '/blog',
		templateUrl: 'views/blog.html',
		controller: 'BlogCtrl'
	})
})

app.controller('BlogCtrl', function($scope){
	$scope.posts = [
	{title:'hello', text:'the blog post'},
	{title:'this', text: 'this is the other post'},
	{title:'is', text: 'the third post'},
	{title:'blog',text: 'hello!'}]
})


app.directive('blogPost',function(){
	return {
		restrict: 'E',
		template: '<h1>{{post.title}}</h1><p>{{post.text}}</p>'
	}
})