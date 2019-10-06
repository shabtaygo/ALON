// console.log("enter a Integer");
// while (condition) {

// }
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('enter a Integer ', (answer) => {
    // TODO: Log the answer in a database
    var int = parseInt(answer);
    var float = parseFloat(answer);
    console.log(int==float)
    if (int == float) {
        if (!int % 2) {
            console.log(`Yor numer ${int} is even`);
        } else {
            console.log(`Yor numer ${int} is odd`);
        }
    }
    else{
        console.log("Please enter an integer number");
    }
   
    rl.close();
});
// var request = require('request');