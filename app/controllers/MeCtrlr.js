var app = angular.module('meApp');

app.controller('MeCtrlr', function($scope, meService) {

	$scope.hobbies = meService.getData('hobbies').then(function(response) {
		$scope.hobbies = response.data;
	});

	$scope.occupations = meService.getData('occupations').then(function(response) {
		$scope.occupations = response.data;
	});

	$scope.mentions = meService.getData('mentions').then(function(response) {
		
		$scope.mentions = response.data;
	});

	$scope.references = meService.getData('references').then(function(response) {
		$scope.references = response.data;
	});


});