// load page
fetch('https://jsonplaceholder.typicode.com/users').then(
    data => {
        data.json().then(
            data => {
                var toAppend = '<ul id="names">';
                console.log(data);
                data.forEach(element => {
                    toAppend += `<li><button type="button" class="btn btn-link" onclick="missions(${element.id})" >${element.name}</button></li>`;
                    console.log(element.name);
                });
                document.getElementsByClassName('col-3')[0].innerHTML = toAppend;
            }
        )
    }
)

//create list of titels
function missions(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`).then(
        data => {
            data.json().then(
                data => {
                    var toAppend = '<ol id="titles">';
                    console.log(data)
                    data.forEach(element => {
                        toAppend += `<li>${element.title}</li>`
                    });
                    document.getElementsByClassName('col-6')[0].innerHTML = toAppend;
                }
            )
        }
    )
}
