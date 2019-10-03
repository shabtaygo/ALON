

$('body').append("<h1 class=" + "text-primary" + ">loading</h1>");
$('h1').css('text-align', 'center');
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");

    }, 3000);
})


promise.then(data => {
    $('h1').html(data).attr('class', 'text-success');
}).catch(() => console.log('Error'));


