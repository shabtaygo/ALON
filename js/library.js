class Book {
    constructor(id, name, numPages) {
        this.id = id;
        this.name = name;
        this.numPages = numPages;
    }
}

var books = [];


$('#add_book').click(() => {
    books.push(new Book($('#id').val(), $('#name').val(), $('#length').val()));
    $('#id').val("");
    $('#name').val("");
    $('#length').val("");

})

$('#show_books').click(() => {
    console.log(books);
})

$('#longest_book').click(() => {
    books.sort((a, b) => { return b.numPages - a.numPages });
    console.log(books[0]);
})


// Exercise 3
// var arr = [];
// for (let index = 0; index < 5; index++) {
//     arr.push(new Book(index, 'Book' + index, Math.trunc(Math.random() * 500)));
// }
// console.log(arr);

