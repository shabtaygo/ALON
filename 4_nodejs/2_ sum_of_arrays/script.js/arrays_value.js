exports.pushValuse = (array) => {
    array.forEach(element => {
        rand = Math.ceil(Math.random() * 10)
        for (let index = 0; index < rand; index++) {
            element.push(Math.trunc(Math.random() * 100))
        }
    });
    return array;
}