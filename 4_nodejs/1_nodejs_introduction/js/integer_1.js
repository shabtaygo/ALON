// כתבו תוכנית הקולטת מהשתמש מספר שלם.
// אם הקלט הוא יהיה מספר לא שלם, המשתמש יקבל הודעה "אנא הזן מספר שלם".
// הפלט של התוכנית יהיה האם המספר הוא זוגי או לא + המספר שהתקבל מהמשתמש.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('enter a Integer ', (answer) => {
    var int = parseInt(answer);
    var float = parseFloat(answer);
    //checking if input number is a int
    if (int == float) {
        if (!int % 2) {
            console.log(`Yor numer ${int} is even`);
        } else {
            console.log(`Yor numer ${int} is odd`);
        }
    }
    else {
        console.log("Please enter an integer number");
    }
    rl.close();
});
