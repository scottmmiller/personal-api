var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 9999;

var userData = {
	name: "Scott M Miller",
	location: {
		city: "Kaysville",
		state: "UT"
		},
	hobbies: ["JavaScript", "Angular", "Firebase", "NodeJS", "MongoDB"],
	occupations: ["Cashier", "Tire Installer", "AM Merch", "Customer Service Specialist"],
	latestOccs: []
	};

app.listen(port);

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

			//GETs
app.get('/name', function(req, res) {
	// res.type('application/json');
	return res.json(userData.name)
});


app.get('/location', function(req, res) {
	// res.type('application/json');
	return res.json(userData.location.city + ', ' + userData.location.state)
});


app.get('/hobbies', function(req, res) {
	// res.type('application/json');
	return res.json(userData.hobbies)
});


app.get('/occupations', function(req, res) {
	// res.type('application/json');
	return res.json(userData.occupations)
});


app.get('/occupations/latest', function(req, res) {
	// res.type('application/json');
	var latest = userData.occupations[userData.occupations.length - 1];
	return res.json(latest);
});




			//PUTs
app.put('/location', function(req, res) {
	// res.type('application/json');

	return res.json(userData.location)
});
