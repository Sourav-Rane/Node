const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')
 
//Create add command
yargs.command(
    {
        command: "add",
        describe: "Add a new note",
        // builder houses all the arguments to run a cmd
        builder:{
            title:{
                describe:"Note title",
                demandOption: true,
                type:'string'
            },
            body:{
                describe:"Note body",
                demandOption: true,
                type : 'string'
            }
        },
        handler(argv){
           notes.addNote(argv.title , argv.body)
        }
    }
)

//Create remove command
yargs.command(
    {
        command: "remove",
        describe: "Remove a new note",
        builder: {
            title:{
                describe: 'remove a note',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            notes.removeNote(argv.title)
        }
    }
)

//Create read command
yargs.command(
    {
        command: "read",
        describe: "Read a note",
        builder : {
            title:{
                describe:'read a note',
                demandOption: true,
                type:'string'
            }
        },
        handler(argv){
            notes.readNote(argv.title)
        }
    }
)

//Create list command
yargs.command(
    {
        command: "list",
        describe: "List out all notes",
        handler(){
            notes.listNotes()
        }
    }
)

// add , remove , read , list 
yargs.argv 