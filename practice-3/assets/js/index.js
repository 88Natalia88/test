const table = document.querySelector('#table');

function createTable(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach((element) => {
            let row = document.createElement('tr');
            row.className = 'tableRow';
            row.innerHTML += `
            <td>${element.id}</td>
            <td>${element.userId}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>`
            table.append(row);
        });
    });
};

createTable();

const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');


searchBtn.addEventListener("click", searchText);

function searchText(e){
    e.preventDefault();
    let searchAdd = search.value;
    
    const regSearch = searchAdd.toLowerCase();
    if(searchAdd.length >= 3){
        const tableRows = document.querySelectorAll('#table .tableRow');
        tableRows.forEach((row) => {
            const rowData = row.textContent;
            if(rowData.toLowerCase().includes(regSearch)){
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    } else {
        const tableRows = document.querySelectorAll("#table .tableRow");
    
        tableRows.forEach((row) => {
            row.style.display = "table-row";
        });
    }
    search.value = '';
}