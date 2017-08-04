angular.module('app',['ngResource', 'ngRoute']);

//Creating the default route for angular to use the main partial jade file
angular.module('app').config(function($routeProvider, $locationProvider){
	var routeRoleChecks = {
		user: {
			auth: function (mvAuth) {
				return mvAuth.authorizeAuthenticatedUserForRoute()
			}
		}
	}
	
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
		.when('/signup', { templateUrl: '/partials/account/signup', controller: 'mvSignupCtrl'})
		.when('/profile', { 
							templateUrl: '/partials/profile/profile', 
							controller: 'mvProfileCtrl',
							resolve: routeRoleChecks.user
		})
});