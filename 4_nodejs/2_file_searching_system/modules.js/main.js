var re = require('./textFileModule');
var convert = require('./strToArray');
var serch = require('./findInArr');

//input for input a word
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`enter a word for serch?  `, (name) => {
  // calling for all modules
  console.log(`Is the word ${name} in the file? --> ${serch.find(convert.change(re.getString('C:/FullStak/Presentations/hello.txt')), name)}`);
  readline.close()
})
