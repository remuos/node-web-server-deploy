const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');


const port = process.env.PORT || 3000 ;
app.get('/', (req,res) => {
	res.render('home.hbs',{
		pageTitle:"Home Page",
		message : "Hello world"
	});
	
});

app.get('/about', (req,res) => {
	res.render('home.hbs',{
		pageTitle:"Home Page",
		message : "About Us"
	});
	
});

app.listen(port, () => {
	console.log('Server is up on port '+port);
});

