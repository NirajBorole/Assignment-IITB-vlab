const tableBody = document.getElementById("data-edit")

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const row = tableBody.insertRow();
            // adds checkbox to row
            const checkboxCell = row.insertCell(0);
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxCell.appendChild(checkbox);

            row.insertCell(1).textContent = item.chemical_name;
            row.insertCell(2).textContent = item.vendor;
            row.insertCell(3).textContent = item.density;
            row.insertCell(4).textContent = item.viscosity;
            row.insertCell(5).textContent = item.packaging;
            row.insertCell(6).textContent = item.package_size;
            row.insertCell(7).textContent = item.unit;
            row.insertCell(8).textContent = item.quantity;
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
    
// add row feature
document.getElementById('add-button').onclick = function() {
    const row = tableBody.insertRow();
    const checkBoxCell = row.insertCell(0);
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBoxCell.appendChild(checkBox);
    for (let i = 1; i < 9; i++) {
        const cell = row.insertCell(i);
        cell.contentEditable = true; // adds attribute to make content editable
        cell.textContent = ' '; 
    }
    // focus on first cell of new row
    row.cells[1].focus();
};

// delete row feature by using checkbox
document.getElementById('delete-button').onclick = function() {
    const rows = tableBody.rows;
    for (let i = rows.length - 1; i >= 0; i--) {
        if (rows[i].cells[0].firstChild && rows[i].cells[0].firstChild.checked) {
            tableBody.deleteRow(i);
        }
    }
};

// edit row feature
document.getElementById('edit-button').onclick = function() {
    const rows = tableBody.rows;
    for (let i = 0; i < rows.length; i++) {
        // Access the checkbox
        const checkbox = rows[i].cells[0].firstChild; 
        if (checkbox && checkbox.checked) {
            // Exclude only the checkbox cell
            const cells = rows[i].querySelectorAll('td:not(:first-child)'); 
            cells.forEach(cell => {
                cell.contentEditable = cell.contentEditable === "true" ? "false" : "true";
                if (cell.contentEditable === "true") {
                    rows[i].cells[1].focus();
                }
            });
        }
    }
};

// sort data in ascending order 
document.getElementById('asce-sort').onclick = function() {
    sortData(true);
};

// sort data in descending order 
document.getElementById('desc-sort').onclick = function() {
    sortData(false);
};

// function to sort data using chemical name
function sortData(ascending) {
    const rows = Array.from(tableBody.rows);
    rows.sort((a, b) => {
        const nameA = a.cells[1].textContent.toLowerCase();
        const nameB = b.cells[1].textContent.toLowerCase();
        if (nameA < nameB) return ascending ? -1 : 1;
        if (nameA > nameB) return ascending ? 1 : -1;
        return 0;
    });
    rows.forEach(row => tableBody.appendChild(row));
}
