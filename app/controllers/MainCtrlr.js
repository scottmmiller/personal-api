var app = angular.module('meApp');

app.controller('MainCtrlr', function(meService, $scope, $route, $routeParams, $location) {


	// $scope.test = "MainCtrlr";

	$scope.name = meService.getData('name').then(function(response){
		$scope.name = response.data;
		console.log(typeof $scope.name)
	});

	$scope.location = meService.getData('location').then(function(response) {
		$scope.location = response.data;
	});

});