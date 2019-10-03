
// getting the drivers school list and put them in the DOM
fetch('https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=399').then(
    data => data.json().then(data => {
        newHtml(data.result.records);
    })
);

// getting the drivers school list according to condition and put them in the DOM
function serch() {
    fetch('https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=399').then(
        data => data.json().then(
            data => {
                var city = document.getElementById('inputCity').value;
                newHtml(data.result.records.filter(element => element.ezor == city));
            }
        )
    )
}

//help function
function newHtml(obj) {
    var table = document.getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    obj.forEach((element, i) => {
        table.innerHTML +=
            `<tr id="${i}">                  
                <td>${element._id}</td>
                <td>${element.shem_beit_sefer}</td>
                <td>${element.ezor}</td>
                <td>${element.menahel}</td>
             </tr>`;
    });
}


