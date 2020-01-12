const express = require('express'),
        request = require('request'),
        app = express();


app.set('view engine', 'ejs');     

app.get('/', function(req,res) {
    res.render('search');
})

app.get('/results', function(req, res) {
    const query = req.query.search;
    const url = `http://omdbapi.com/?s=${query}&apikey=thewdb`
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // res.send(data['Search'][0]['Title']);
            // res.send(`${data.Search[0].Title} was relesead in ${data.Search[0].Year}`)
            res.render('results', {data : data});
        }
    })
})


const port = process.env.port || 5000;

app.listen(port, console.log(`Server of Moive App started on port ${port}`));