const fs = require('fs')
const chalk = require('chalk')


// load a note from the storage
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') // some weird m/c format
        const dataJSON = dataBuffer.toString() // converts m/c format to string ( readable )
        return JSON.parse(dataJSON) // converts json to object
    } catch (e) {
        return [] // return empty array if file does not exist
    }

}


// save a note to the storage
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON) // this will create the file if dosent it exists.
}



// add a note 
const addNote = (title, body) => {
    const notes = loadNotes()

    // to avoid note redundancy
    // const duplicateNotes = notes.filter(function (note) { // filter out all those who satisfy the condition
    //     return note.title === title  // return T or F
    // })

    // const duplicateNotes = notes.filter((note) => note.title === title) // loops through all the elements till end
    const duplicateNote = notes.find((note) => note.title === title) // stops at the first instance found
    //checking redundancy
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added !"))
    } else {
        console.log(chalk.red.inverse('Note title already taken !'))
    }

}

// remove a note 
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green.inverse('   Note Removed !   '))
    } else {
        console.log(chalk.red.inverse('    No Note Found !   '))
    }
    saveNotes(notesToKeep)

}

// list all notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("  your notes ... "))
    if (notes.length === 0) console.log(chalk.red.inverse("   Empty..!   "))
    else {
        notes.forEach((note) => console.log(note.title))
    }
}


// read a note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('  Note not found... ! '))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

