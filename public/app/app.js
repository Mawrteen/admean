angular.module('app',['ngResource', 'ngRoute']);

//Creating the default route for angular to use the main partial jade file
angular.module('app').config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'})
});

//Creating controller with a simple message, which for this basic example is kept in this file
angular.module('app').controller('mainCtrl', function($scope){
	$scope.myVar = "Message from Angular";
});