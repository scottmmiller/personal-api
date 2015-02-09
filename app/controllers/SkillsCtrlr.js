var app = angular.module('meApp');

app.controller('SkillsCtrlr', function($scope, meService) {

	$scope.skills = meService.getData('skills').then(function(response) {
		$scope.skills = response.data;
	});

});