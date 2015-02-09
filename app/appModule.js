var app = angular.module('meApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'MainCtrlr',
			resolve: {

			}
		}).when('/me', {
			templateUrl: 'templates/me.html',
			controller: 'MeCtrlr',
			resolve: {

			}
		}).when('/skills', {
			templateUrl: 'templates/skills.html',
			controller: 'SkillsCtrlr',
			resolve: {

			}
		}).otherwise('/');

});