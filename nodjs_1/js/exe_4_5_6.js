
// //exe 4
function longest(params) {
    return (params.map(String)).reduce((a, b) => a.length > b.length ? a : b, '');
}

var numbers = [15.5, 2.3, 1.11111, 4.7586, "waesfdgf", "saddffgh"];
var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis",
    "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

// for example 4
console.log('for example exe 4');
console.log(`The longest word is:  ${longest(plorp)}`);
console.log(`The longest word is:  ${longest(numbers)}`);
console.log('------------------------------------------------------------');

//exe 5
function moreThen5(params) {
    return params.map(String).filter(word => word.length > 5);
}
//for example 5
console.log('for example exe 5');
console.log(`The words's length more then 5 is:  ${moreThen5(numbers)}`);
console.log(`The words's length more then 5 is:  ${moreThen5(plorp)}`);
console.log('------------------------------------------------------------');

//exe 6 
var justNumbers1 = [2,3,4,5,6];
var justNumbers2 = [2.5,3.7,4.04,5.7,6.88];

    
function multiplication(params) {
    return params.reduce((totel, num) => {return totel * num})
}

//for example 6
console.log('for example exe 6');
console.log(multiplication(justNumbers1));
console.log(multiplication(justNumbers2));
console.log('------------------------------------------------------------');