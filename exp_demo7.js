var express = require('express');
var app = express();

// Simple request time logger
app.use(function(req,res,next) {
    console.log("A new request received at " + Date.now());
    next();
});
 


app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);


