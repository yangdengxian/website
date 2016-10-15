/**
 * app entry
 */
'use strict'

const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.set('port',(process.env.PORT || 3000));

app.use('/',express.static(path.join(__dirname,'public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//webglearth-typhoon route
require('./route/webglearth-typhoon-route.js')(app);

app.listen(app.get('port'),()=>{
	console.log('Server started: http://localhost:'+app.get('port')+'/');
});