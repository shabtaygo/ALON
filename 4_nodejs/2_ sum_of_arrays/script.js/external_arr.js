exports.creatingArr = () => {
    var array = [];
    var rand = Math.ceil(Math.random() * 10)
    for (let index = 0; index < rand; index++) {
        array.push([]);
    }
    return array;
}
