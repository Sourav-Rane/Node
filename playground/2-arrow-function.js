//Type 1
// const square = function (x) {
//     return x*x
// }

//Type 2
// const square = (x) => {
//     return x * x
// }


//Type 3
// const square = (x) => x * x

// console.log(square(3))


// const event = {
//     name: 'Birthday Party',
//     printGuestList: function() {
//         console.log("Guest list for " + this.name)
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList : ['Andrew' , 'Jen', 'Mike'],
    printGuestList() {
        console.log("Guest list for " + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending "+ this.name)
        })
    }
}

event.printGuestList()