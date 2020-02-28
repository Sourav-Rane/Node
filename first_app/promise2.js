let cleanRoom = function() {
    return new Promise(function(resolve , reject){
        resolve('Cleaned the room');
    })
}

let removeGarbage = function(message) {
    return new Promise(function(resolve , reject){
        resolve(message + 'Removed the garbage');
    })
}

let winIceCream = function(message) {
    return new Promise(function(resolve , reject){
        resolve(message + 'Won Icecream');
    })
}


// cleanRoom().then(function(result){
//     return removeGarbage(result);
// }).then(function(result){
//     return winIceCream(result);
// }).then(function(result){
//     console.log('finished ....' + result);
// })


Promise.all([cleanRoom() , removeGarbage() , winIceCream()]).then(function(){
    console.log('all done');
});


Promise.race([cleanRoom() , removeGarbage() , winIceCream()]).then(function(){
    console.log('one of them finished ..');
});
