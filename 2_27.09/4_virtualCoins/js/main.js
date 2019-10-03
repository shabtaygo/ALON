
//create table
fetch('https://api.coincap.io/v2/assets').then(
    data => {
        data.json().then(
            data => {
                var toAppend = '';
                console.log(typeof data.data[0].priceUsd);
                data.data.forEach(element => {
                    toAppend+=`<tr>
                                <th scope="row">${element.rank}</th>
                                <td>${element.name}</td>
                                <td>${parseFloat(element.priceUsd).toFixed(3)}</td>
                               </tr>`
                });
                document.getElementsByTagName('tbody')[0].innerHTML=toAppend;
            }
        )
    }
)   
