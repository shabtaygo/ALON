const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('enter a day in month ', (answer) => {
    // TODO: Log the answer in a database
    var int = parseInt(answer);

    if (int > 0) {
        if (int == 1) {
            console.log("good month")
        } else {
            if (int > 1 && int < 10) {
                console.log("..working")
            } else {
                if (int == 10) {
                    console.log("SALERY DAY")
                } else {
                    if (int > 10 && int < 20) {
                        console.log("BE HAPPY")
                    } else {
                        if (int >= 20 && int <= 30) {
                            console.log("the end")
                        } else {
                            console.log("BOOM BOOM")
                        }
                    }
                }
            }
        }
    }
    else {
        console.log("Please enter a corect day in month");
    }

    rl.close();
});