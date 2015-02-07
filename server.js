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
	mentions: ['http://www.facebook.com/SkootDiggity', 'https://github.com/scottmmiller', 'http://google.com/+ScottMMiller9'],
	references: ['Jack R Christianson', 'Andy Lange', 'Luke Johnson', 'Dan Webster']
	};

app.listen(port);
	console.log('listening on port ' + port)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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
	if(req.query.order === 'desc') {
		return res.json(userData.hobbies.sort());
	} else if (req.query.order === 'asc') {
		return res.json(userData.hobbies.reverse());
	} else {
		return res.json(userData.hobbies);
	}
});

app.get('/occupations', function(req, res) {
	// res.type('application/json');
	if(req.query.order === 'desc') {
		return res.json(userData.occupations.sort());
	} else if(req.query.order === 'asc') {
		return res.json(userData.occupations.reverse());
	} else {
		return res.json(userData.occupations);
	}
});

app.get('/occupations/latest', function(req, res) {
	// res.type('application/json');
	var latest = userData.occupations[userData.occupations.length - 1];
	return res.json(latest);
});

app.get('/mentions', function(req, res) {
	//res.type('application/json');
	return res.json(userData.mentions);
});

app.get('/references', function(req, res) {
	//res.type('appliction/json');
	return res.json(userData.references);
});


			//POSTs
app.post('/mentions', function(req, res) {
	//res.type('application/json');
	userData.mentions.push(req.body.mentions);
	return res.send(userData.mentions);
});

app.post('/references', function(req, res) {
	//res.type('applications/json');
	userData.references.push(req.body.references);
	return res.send(userData.references);
});


			//PUTs
app.put('/location', function(req, res) {
	// res.type('application/json');
	newLocation = userData.location.city + ", " + userData.location.state;
	return res.json(newLocation)
});


