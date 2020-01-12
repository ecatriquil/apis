const request = require("./node_modules/request");

// const request = require('request');

// request('http://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
//         if (!error && response.statusCode == 200) {
//             const parsedData = JSON.parse(body);
//             // console.log(parsedData['query']['results']['channel']['astronomy']['sunset']);
//             // console.log(parsedData['name']);
//             console.log(`${parsedData.name} lives in ${parsedData.address.city}`);  
//         }
// });

const rp = require('./node_modules/request-promise');
rp('https://jsonplaceholder.typicode.com/users/1')
    .then((body) => {
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} live in ${parsedData.address.city}`);
    })
    .catch((err) => {
        console.log(err);
    });

