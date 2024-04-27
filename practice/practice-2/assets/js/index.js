const table = document.querySelector('#table');

function createTable(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach((element) => {
            //console.log(element)
            let row = document.createElement('tr');
            row.className = 'tableRow';
            row.innerHTML += `<tbody>
            <td>${element.id}</td>
            <td>${element.userId}</td>
            <td>${element.title}</td>
            <td>${element.body}</td></tbody>`
            table.append(row);
        });
    });
};

createTable();