
const EventEmitter = require('events');


var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        // send an hhtp request 
        console.log(message);
        this.emit('msgLogged', {id:1, url:'djflaskj'});
    }
    
}


module.exports = Logger;
