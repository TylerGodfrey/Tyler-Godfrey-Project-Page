/**
 * Created by yerfd on 1/31/2017.
 */

function updateTable() {
    // Here's where your code is going to go.
    var url = "api/name_list_get";
    var table = document.getElementById("datatable");
    var rowIndex = 1;
    $.getJSON(url, null, function(json_result) {
        for (var i = 0; i < json_result.length; i++) {
            var row = table.insertRow(rowIndex);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = json_result[i].id;
            cell2.innerHTML = json_result[i].first;
            cell3.innerHTML = json_result[i].last;
            cell4.innerHTML = json_result[i].email;
            cell5.innerHTML = json_result[i].phone;
            cell6.innerHTML = json_result[i].birthday;
            console.log(json_result[i].first);
            rowIndex++;
        }
        $('#datatable')[0].rows[0].remove();
        $('#datatable')[0].rows[rowIndex - 1].remove();
    })
}

// Call your code.
updateTable();
