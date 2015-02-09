var app = angular.module('meApp');

app.service('meService', function($http, $q) {

	this.getData = function(reqInfo) {
		return $http.get('http://localhost:9999/' + reqInfo);
	}

});