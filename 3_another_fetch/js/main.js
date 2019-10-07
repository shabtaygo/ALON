start();
function start() {
    console.log("start");
    fetch('https://jsonplaceholder.typicode.com/posts').then(
        data => {
            data.json().then(
                data => {
                    var a = `<div class="container-fluide">
                                <h1 class="text-center"><u> watch at comments on each article</u></h1>
                                <br>
                                <div class="container"></div>
                            </div>`;
                
                    // var list = document.getElementById('list');
                    var list = `<ol id="list">`;
                    data.forEach(element => {
                        list += `<li><button type="button" onclick="comments(${element.userId},${element.id})"
                     class="btn btn-link text-left">${element.title}</button></li>`
                    });
                    list += '</ol>';
                    
                    document.getElementsByTagName('body')[0].innerHTML += a;
                    document.getElementsByClassName('container')[0].innerHTML += list;
                }
            )
        }
    )
}

function back() {
    document.getElementsByClassName('container-fluide')[0].remove();
    start();
}

function comments(userId, id) {

    // get author name
    fetch(`https://jsonplaceholder.typicode.com/users/?id=${userId}`).then(
        data => {
            data.json().then(
                response => {
                    name = response[0].name;
                }
            )
        }
    )

    // get responses
    fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`).then(
        data => {
            data.json().then(
                data => {
                    //bulid  responses div
                    var div = document.getElementsByClassName('container-fluide')[0];
                    div.innerHTML = `<div class="container">
                                    <br>
                                     <h3 class="text-center"><u>Author:  <span class="text-success"> ${name}</span></u></h3>
                                      <br>
                                      <div class="row row justify-content-center">
                                      <div class="col-2 text-left"><h3>Responses :</h3></div>
                                      <div class="col-7"><ol id="responses"></ol> </div>
                                      </div>
                                      <button type="button" class="btn btn-info btn-lg btn-block" onclick="back()">Back to posts list</button>
                                    </div>
                                    <br>
                                      ` ;
                    // bulid responses list                  
                    var res = document.getElementById('responses');
                    var toAppend = ``;
                    var empty = 0;
                    data.forEach((element) => {
                        if (element.body) {
                            toAppend += `<li>${element.body}</li><hr>`
                        } else {
                            empty++;
                        }
                    });
                    // if there is at least one none empty response
                    if (empty < 5) {
                        res.innerHTML += toAppend;
                    } else {
                        document.getElementsByClassName('row')[0].innerHTML = `<h4>The comments are not available</h4>`
                    }
                }
            )
        }
    )
}
