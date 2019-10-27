var promis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)]);
    }, 2000);
});

promis.then((data) => {
    if (data[0] == data[1]) {
        console.log('double')
    } else {
       console.log(`The first dice return - ${data[0]} \nThe second dice return -   ${data[1]}`)
    }
})
