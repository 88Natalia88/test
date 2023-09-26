const table = document.querySelector('#table tbody');
//создание таблицы с данными
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
//поисковая строка
const search = document.querySelector('#search');

search.addEventListener("input", searchText);
//поиск по таблице
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
}
//сортировка
const tableHeaders = document.querySelectorAll('th');

tableHeaders.forEach((header) => {
    //console.log(header)
    header.addEventListener("click", () => {
        //console.log(header)
        sortTable(header.cellIndex, header.dataset.type, header)
    });
    header.isSort = false;
})

function sortTable(colNum, type, header){
    let tbody = document.querySelector('tbody');
    //console.log(tbody)
    let rowsArray = Array.from(tbody.rows);
    //console.log(rowsArray)
    let compare;
    switch(type){
        case 'number':
            compare = function(rowA, rowB){
                return header.isSort
                    ? rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
                    : rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
            }
            break;
            case 'string':
                compare = function(rowA, rowB){
                    return header.isSort
                    ? (rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1)
                    : (rowA.cells[colNum].innerHTML < rowB.cells[colNum].innerHTML ? 1 : -1);
                }
                break;
    }
    rowsArray.sort(compare);
    tbody.append(...rowsArray);
    header.isSort = !header.isSort;
}