var dice1 = Math.ceil(Math.random() * 6);
var dice2 = Math.ceil(Math.random() * 6);
if (dice1==dice2) {
    console.log(`lucky day you get double ${dice2}`);
} else {
    console.log(`The result of thh first dice is:  ${dice1}\nThe result of thh second dice is:  ${dice2}`);
}