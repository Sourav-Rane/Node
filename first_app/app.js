// const log = require('./logger');
// log('Hello World ')

// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj)

// const os = require('os');

// var memory = os.freemem();

// console.log(memory);

// const fs = require('fs');
// fs.readdir()

// const files = fs.readdir('./', function(err , files){
//     if(err)
//     console.log('Error',err);
//     else console.log('Result' , files);
// })

// console.log(files);

// const EventEmitter = require('events');




// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('msgLogged', function(arg){
//     console.log("listener called !", arg);
// })


// logger.log('message');


const http = require('http');

const server = http.createServer( (req , res) => {
    if(req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// server.on('connection' , (socket) => {
//     console.log('new connection....')
// })

server.listen(3000);

console.log('Listeming on port 3000....');
