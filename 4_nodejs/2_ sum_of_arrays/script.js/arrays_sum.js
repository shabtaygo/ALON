exports.getSum = (params) => {
    var arr = [];
    params.forEach(element => {
        arr.push(element.reduce((total, num) => { return total + num }))
    });
    return arr;
}